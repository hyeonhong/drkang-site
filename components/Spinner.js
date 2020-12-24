import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const { navbarHeight } = require('../config')

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `calc(100vh - ${navbarHeight}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function Spinner() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}
