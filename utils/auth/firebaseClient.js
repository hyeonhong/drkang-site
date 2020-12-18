import { createContext, useContext, useState, useEffect } from 'react'
import firebaseClient from 'firebase/app'
import 'firebase/auth'
import queryString from 'query-string'
import Cookies from 'js-cookie'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(config)
  // firebaseClient.auth().languageCode = 'kr'
}

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

export function useProvideAuth() {
  const [session, setSession] = useState(null)

  function signUp(email, password) {
    return firebaseClient.auth().createUserWithEmailAndPassword(email, password)
  }

  function signIn(email, password) {
    return firebaseClient.auth().signInWithEmailAndPassword(email, password)
  }

  function signInWithGoogle() {
    const provider = new firebaseClient.auth.GoogleAuthProvider()
    return firebaseClient.auth().signInWithPopup(provider)
  }

  function signInWithFacebook() {
    const provider = new firebaseClient.auth.FacebookAuthProvider()
    // provider.setCustomParameters({
    //   display: 'popup'
    // })
    return firebaseClient.auth().signInWithPopup(provider)
  }

  function signInWithCustomToken(token) {
    return firebaseClient.auth().signInWithCustomToken(token)
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

    const interval = setInterval(() => {
      const token = Cookies.get('customToken') // sent from /api/auth/callback/naver
      if (token) {
        signInWithCustomToken(token).catch((error) => {
          console.log('error signing up:', error)
        })
        Cookies.remove('customToken')
        clearInterval(interval)
      }
    }, 100)
  }

  function signOut() {
    return firebaseClient.auth().signOut()
  }

  // function resetPassword(email) {
  //   return firebaseClient.auth().sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return user.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return user.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        setSession(token)
        Cookies.set('token', token, {
          // firebase id tokens expire in one hour
          // set cookie expiry to match
          expires: 1 / 24
        })
      } else {
        setSession(null)
        Cookies.remove('token')
      }
    })

    return unsubscribe
  }, [])

  return {
    session,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithNaver,
    signOut
  }
}
