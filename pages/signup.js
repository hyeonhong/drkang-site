import { useLayoutEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SignUp from 'components/SignUp'
import { useLayout } from 'utils/hook/useLayout'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function SignUpPage() {
  const classes = useStyles()
  const { setLayoutConfigs } = useLayout()

  useLayoutEffect(() => {
    setLayoutConfigs({ maxWidth: 'false', disableGutters: true })
  }, [])

  return (
    <Box className={classes.root}>
      <SignUp />
    </Box>
  )
}
