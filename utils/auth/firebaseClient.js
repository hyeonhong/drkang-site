import { createContext, useContext, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import queryString from 'query-string'
import Cookies from 'js-cookie'
import firebase from './initFirebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  const { loading } = auth
  return (
    <AuthContext.Provider value={auth}>
      {loading ? <Typography variant="body1">{'Loading...'}</Typography> : children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  function signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
  }

  function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    // provider.setCustomParameters({
    //   display: 'popup'
    // })
    return firebase.auth().signInWithPopup(provider)
  }

  function signInWithCustomToken(token) {
    return firebase.auth().signInWithCustomToken(token)
  }

  function signInWithNaver() {
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
          console.log('error signing up:', error)
        })
        Cookies.remove('customToken')
        clearInterval(handle)
      }
    }, 100)
  }

  function signOut() {
    return firebase.auth().signOut()
  }

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
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      setLoading(false)
      if (user) {
        if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
          // don't set user until email is verified
        } else {
          setUser(user)
          const token = await user.getIdToken()
          Cookies.set('token', token, { expires: 1 / 24 })
        }

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
      const user = firebase.auth().currentUser
      if (user) {
        const token = await user.getIdToken(true)
        // setUser(firebase.auth().currentUser)
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
    signOut
  }
}
