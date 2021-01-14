import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery, Typography, Container, Box } from '@material-ui/core'
import withTexts from 'utils/hoc/withTexts'

const useStyles = makeStyles((theme) => ({
  // link: {
  //   // Remove all styling of 'a' tag
  //   color: 'inherit',
  //   textDecoration: 'inherit'
  // },
  footer: {
    padding: theme.spacing(3, 0, 3),
    color: '#f8f9fa',
    backgroundColor: '#242626'
  },
  navList: {
    display: 'flex',
    // justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  navListItem: {
    textAlign: 'center'
  },
  footerText: {
    whiteSpace: 'pre-wrap',
    color: '#f8f9fa'
  }
}))

const Footer = ({ texts }) => {
  const classes = useStyles()

  const mobileLineBreak = useMediaQuery('(max-width:600px)') ? '\n' : '/'

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: 1 }} />
        <Box sx={{ marginBottom: 6 }} />
        {/* <img src={logo} alt="company logo" height="80" padding="0" /> // logo image */}
        <Box sx={{ marginBottom: 3 }} />
        <Typography variant="subtitle1" gutterBottom className={classes.footerText}>
          {`${texts.name} / ${texts.bizNo}`}
          <br />
          {texts.address}
          <br />
          {`${texts.email} ${mobileLineBreak} ${texts.phoneNo}`}
        </Typography>
        <Box sx={{ marginBottom: 2 }} />
        <Typography variant="body1" className={classes.footerText}>
          {`Copyright ${new Date().getFullYear()} Dr. Kang Clinic. All rights reserved`}
          <br />
          {`${texts.terms}    |    ${texts.privacy}`}
        </Typography>
      </Container>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default withTexts(Footer)
