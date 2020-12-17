import * as firebaseAdmin from 'firebase-admin'

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  })
}

export function verifyIdToken(token) {
  return firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}

export function createCustomToken(uid) {
  return firebaseAdmin
    .auth()
    .createCustomToken(uid)
    .catch((error) => {
      throw error
    })
}
