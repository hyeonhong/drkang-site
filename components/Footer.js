import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery, Typography, Container, Box, Divider } from '@material-ui/core'

import { useLang } from 'utils/hooks/useLang'
import footerText from 'contents/footerText'

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
  dividerColor: {
    backgroundColor: '#696969'
  },
  footerText: {
    whiteSpace: 'pre-line',
    color: '#f8f9fa'
  }
}))

export default function Footer() {
  const classes = useStyles()
  const { lang } = useLang()
  const text = footerText[lang]

  const mobileLineBreak = useMediaQuery('(max-width:600px)') ? '\n' : '/'

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: 1 }} />
        <Divider classes={{ root: classes.dividerColor }} />
        <Box sx={{ marginBottom: 6 }} />
        {/* <img src={logo} alt="company logo" height="80" padding="0" /> // logo image */}
        <Box sx={{ marginBottom: 3 }} />
        <Typography variant="subtitle1" gutterBottom className={classes.footerText}>
          {`${text.name} / ${text.CEO} ${mobileLineBreak} ${text.bizNo}
          ${text.address}
          ${text.email} ${mobileLineBreak} ${text.phoneNo} ${mobileLineBreak} `}
        </Typography>
        <Box sx={{ marginBottom: 2 }} />
        <Typography variant="body1" className={classes.footerText}>
          {`Copyright ${new Date().getFullYear()} Dr. Kang Clinic. All rights reserved`}
        </Typography>
      </Container>
    </footer>
  )
}
