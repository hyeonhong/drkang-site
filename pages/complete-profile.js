import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import prisma from 'lib/prisma'
import Profile from 'components/Profile'
import { verifyIdToken, getUser } from 'utils/auth/firebaseAdmin'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function CompleteProfilePage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6">{'Complete My Profile'}</Typography>
      <Profile />
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { token } = ctx.req.cookies
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      },
      props: {}
    }
  }

  let userRecord
  try {
    const { uid } = await verifyIdToken(token)
    userRecord = await getUser(uid)
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      },
      props: {}
    }
  }

  console.log(userRecord)

  // Get user from db
  const user = await prisma.user.findUnique({
    where: { uid: userRecord.uid }
  })

  // Create user
  if (!user) {
    await prisma.user.create({
      data: {
        uid: userRecord.uid,
        email: userRecord.email,
        providerId: userRecord.providerData[0].providerId,
        firstName: '',
        lastName: '',
        gender: '',
        birthYear: ''
      }
    })
  }

  return {
    props: { message: 'carpe diem' }
  }
}
