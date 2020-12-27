import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  form: {
    textAlign: 'left',
    display: 'inline-block',
    width: '460px',
    padding: theme.spacing(4.5, 5)
  },
  textField: {
    width: '100%'
  }
}))

export default function Welcome() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <>
      <Typography variant="h4"> {'Welcome to Kang Clinic !'}</Typography>
      <Typography variant="h6"> {'We are excited to have you on board!'}</Typography>
      <Typography variant="h6"> {"Let's set up your profile and get you started."}</Typography>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        disableRipple
        disableFocusRipple
        disableTouchRipple
        onClick={() => router.push('/completeprofile')}
        className={classes.lowercase}
      >
        Complete My Profile
      </Button>
    </>
  )
}
