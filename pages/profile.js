import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Profile from 'components/Profile'

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
  main: {},
  buttonWrapper: {
    textAlign: 'right'
  }
}))

export default function ProfilePage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            // onClick={() =>{}}
          >
            Edit
          </Button>
        </div>
        <Profile />
      </div>
    </div>
  )
}
