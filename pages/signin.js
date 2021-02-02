import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SignIn from 'components/SignIn'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function SignInPage() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <SignIn />
    </Box>
  )
}
