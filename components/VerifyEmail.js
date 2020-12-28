import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useAuth } from '../utils/auth/firebaseClient'
import Link from './Link'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

    // '& .MuiTextField-root': {
    //   margin: theme.spacing(1)
    // }
  },
  textField: {
    width: '100%'
  }
}))

export default function VerifyEmail() {
  const { user, sendEmailVerification, isEmailVerified } = useAuth()
  const router = useRouter()

  const classes = useStyles()

  const confirmVerification = async () => {
    const verified = await isEmailVerified()
    if (!verified) {
      console.log('You have not verified your email')
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          onClick={() => {
            sendEmailVerification()
          }}
        >
          Resend Email
        </Button>
        <Button onClick={confirmVerification}>Verification Complete</Button>
        <Link onClick={() => router.push('/signin')} variant="h6">
          Return to Sign In
        </Link>
      </div>
    </div>
  )
}
