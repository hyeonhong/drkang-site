import { createContext, useContext, useState, useEffect } from 'react'
import firebaseClient from 'firebase/app'
import 'firebase/auth'
import nookies from 'nookies'

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

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

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

  function signOut() {
    return firebaseClient.auth().signOut()
  }

  function resetPassword(email) {
    return firebaseClient.auth().sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return user.updateEmail(email)
  }

  function updatePassword(password) {
    return user.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (user) {
        setUser(user)
        const token = await user.getIdToken(true)
        nookies.set(null, 'token', token, {
          // firebase id tokens expire in one hour
          // set cookie expiry to match
          maxAge: 60 * 60
        })
      } else {
        setUser(null)
        nookies.set(null, 'token', '', {})
      }
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signInWithGoogle,
        signInWithFacebook,
        signOut,
        resetPassword,
        updateEmail,
        updatePassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
