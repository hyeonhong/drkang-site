import { useRouter } from 'next/router'
import { Box, Button, Typography } from '@material-ui/core'
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
  main: {
    textAlign: 'center'
    // width: '460px'
    // padding: theme.spacing(4.5, 5)
  }
}))

export default function Welcome() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography variant="h4"> {'Welcome to Kang Clinic !'}</Typography>
        <Box />
        <Typography variant="h6"> {'We are excited to have you on board!'}</Typography>
        <Box />
        <Typography variant="h6"> {"Let's set up your profile and get you started."}</Typography>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={() => router.push('/complete-profile')}
          className={classes.lowercase}
        >
          Complete My Profile
        </Button>
      </div>
    </div>
  )
}
