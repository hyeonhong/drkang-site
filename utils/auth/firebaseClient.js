import { useContext, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import Cookies from 'js-cookie'
import firebase from './initFirebase'
import AuthContext from 'utils/context/AuthContext'

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signUp = useCallback((email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        userData.user.sendEmailVerification()
      })
  }, [])

  const signIn = useCallback((email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }, [])

  const signInWithGoogle = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
  }, [])

  const signInWithFacebook = useCallback(() => {
    const provider = new firebase.auth.FacebookAuthProvider()
    // provider.setCustomParameters({
    //   display: 'popup'
    // })
    return firebase.auth().signInWithPopup(provider)
  }, [])

  const signInWithCustomToken = (token) => {
    return firebase.auth().signInWithCustomToken(token)
  }

  const signInWithNaver = useCallback(() => {
    const params = {
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_NAVER_AUTH_CALLBACK_URL,
      state: Math.random().toString(36).substr(2)
    }
    const qs = queryString.stringify(params)
    const url = `https://nid.naver.com/oauth2.0/authorize?${qs}`

    window.open(url, '_blank', 'height=768,width=576')

    const handle = setInterval(() => {
      const token = Cookies.get('customToken') // sent from /api/auth/callback/naver
      if (token) {
        signInWithCustomToken(token).catch((error) => {
          console.log('Error in signInWithCustomToken:', error)
        })
        Cookies.remove('customToken')
        clearInterval(handle)
      }
    }, 100)
  }, [])

  const signOut = useCallback(() => {
    return firebase.auth().signOut()
  }, [])

  const sendEmailVerification = useCallback(() => {
    return firebase.auth().currentUser.sendEmailVerification()
  }, [])

  const isEmailVerified = useCallback(async () => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      await currentUser.reload()
      if (currentUser.emailVerified) {
        setUser(currentUser)
        const token = await currentUser.getIdToken(true)
        Cookies.set('token', token, { expires: 1 / 24 })
        return true
      }
    }
    return false
  }, [])

  // function resetPassword(email) {
  //   return firebase.auth().sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return user.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return user.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (currentUser) => {
      setLoading(false)
      if (currentUser) {
        // For users with email and password, verify email
        if (
          currentUser.providerData.length > 0 &&
          currentUser.providerData[0].providerId === 'password' &&
          !currentUser.emailVerified
        ) {
          router.push('/verifyemail')
        }

        setUser(currentUser)
        const token = await currentUser.getIdToken()
        Cookies.set('token', token, { expires: 1 / 24 })

        // // set persistence
        // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      } else {
        setUser(null)
        Cookies.remove('token')
      }
    })

    return unsubscribe
  }, [])

  // force refresh the token every 30 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const currentUser = firebase.auth().currentUser
      if (currentUser) {
        const token = await currentUser.getIdToken(true)
        Cookies.set('token', token, { expires: 1 / 24 })
      }
    }, 30 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithNaver,
    signOut,
    sendEmailVerification,
    isEmailVerified
  }
}
