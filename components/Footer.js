import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles, experimentalStyled } from '@material-ui/core/styles'
import { Typography, Container, Box, Paper, Button } from '@material-ui/core'
// import { useMediaQuery } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import withTexts from 'utils/hoc/withTexts'

const useStyles = makeStyles((theme) => ({
  // link: {
  //   // Remove all styling of 'a' tag
  //   color: 'inherit',
  //   textDecoration: 'inherit'
  // },
  footer: {
    color: '#f8f9fa',
    backgroundColor: '#242626'
  },
  verticalBar: {
    display: 'inline-block',
    borderWidth: '0 0 0 4px',
    borderStyle: 'solid',
    borderColor: '#13aff0',
    height: theme.typography.body1.fontSize,
    marginRight: theme.spacing(1)
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
    color: '#f8f9fa'
  }
}))

const StyledPaper = experimentalStyled(Paper)(({ theme }) => ({
  width: 360,
  padding: theme.spacing(4)
}))

const Footer = ({ texts }) => {
  const router = useRouter()
  const classes = useStyles()

  const Title = ({ name }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <div className={classes.verticalBar} />
      <Typography variant="body1" display="inline">
        {name}
      </Typography>
    </Box>
  )

  const InlineLink = ({ text, to }) => (
    <Link href={to}>
      <a>
        <Typography variant="body1" display="inline" className={classes.footerText}>
          {text}
        </Typography>
      </a>
    </Link>
  )

  // const mobileLineBreak = useMediaQuery('(max-width:600px)') ? '\n' : '/'

  return (
    <footer className={classes.footer}>
      <Container>
        <Box sx={{ marginBottom: 8 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledPaper>
            <Title name={texts.name} />
            <Typography variant="body2" sx={{ whiteSpace: 'pre' }}>
              {texts.address}
            </Typography>
            <Box sx={{ marginBottom: 4 }} />
            <Typography variant="body2">{texts.phoneNo}</Typography>
            <Typography variant="body2">{texts.email}</Typography>
          </StyledPaper>
          <StyledPaper>
            <Title name={texts.businessHoursTitle} />
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {texts.businessHoursContent}
            </Typography>
          </StyledPaper>
          <StyledPaper>
            <Title name={texts.directions} />
            <Box sx={{ marginBottom: 4 }} />
            <Button
              onClick={() => router.push('/directions')}
              startIcon={<FontAwesomeIcon icon={faArrowCircleRight} />}
            >
              {texts.learnMore}
            </Button>
          </StyledPaper>
        </Box>
        <Box sx={{ marginBottom: 10 }} />
        <Box>
          <InlineLink text={texts.terms} to="/terms" />
          <Typography variant="body1" display="inline" sx={{ whiteSpace: 'pre' }}>
            {'    |    '}
          </Typography>
          <InlineLink text={texts.privacy} to="/privacy" />
          <Typography variant="body1" display="inline" sx={{ whiteSpace: 'pre' }}>
            {`${'    |    '}${texts.CEO}${'    |    '}${texts.bizNo}`}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }} />
        <Typography variant="body1">
          {`Copyright © ${new Date().getFullYear()} DrKangClinic. All Rights Reserved`}
        </Typography>
        <Box sx={{ marginBottom: 8 }} />
      </Container>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default withTexts(Footer)
