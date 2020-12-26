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
      console.log('Error in verifyIdToken:', error)
    })
}

export function createCustomToken(uid) {
  return firebaseAdmin
    .auth()
    .createCustomToken(uid)
    .catch((error) => {
      console.log('Error in createCustomToken:', error)
    })
}

export function getUser(uid) {
  return firebaseAdmin
    .auth()
    .getUser(uid)
    .catch((error) => {
      console.log('Error in getUser:', error)
    })
}

export function updateUser(uid, userRecord) {
  return firebaseAdmin
    .auth()
    .updateUser(uid, userRecord)
    .catch((error) => {
      console.log('Error in updateUser:', error)
    })
}
