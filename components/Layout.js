import { makeStyles } from '@material-ui/core/styles'

import Header from './Header'
import Footer from './Footer'
// import ContactPopUp from './ContactPopUp'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  filler: {
    flex: 1
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      {/* <ContactPopUp /> */}
      {children}
      <div className={classes.filler} />
      <Footer />
    </div>
  )
}

export default Layout
