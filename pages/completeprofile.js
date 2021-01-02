import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Profile from 'components/Profile'

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
