import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SignUp from 'components/SignUp'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUp: {
    margin: theme.spacing(8, 0)
  }
}))

export default function SignUpPage() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.signUp}>
        <SignUp />
      </Box>
    </Box>
  )
}
