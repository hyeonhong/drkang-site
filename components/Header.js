import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import {
  // useMediaQuery,
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  MenuList,
  MenuItem,
  Typography,
  Hidden,
  IconButton,
  Popper,
  Fade,
  Paper
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import withTexts from 'utils/hoc/withTexts'
import LangButton from 'components/LangButton'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
    // backgroundColor: (props) => `rgba(231,170,148,${props.opacity})`,
    // boxShadow: 'none'
  },
  logo: {
    padding: 0
  },
  filler: {
    flexGrow: 1
  },
  menuList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  menuItem: {
    // display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: 100
    },
    '@media (max-width: 768px)': {
      maxWidth: 65
    },
    borderRadius: 8,
    color: 'black'
  },
  button: {
    textTransform: 'none'
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }
}))

const Header = ({ texts }) => {
  const classes = useStyles()
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null)

  const paths = ['/intro', '/services', '/directions']

  // const isTablet = useMediaQuery('(max-width:768px)')

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button onClick={() => router.push('/')} color="inherit" className={classes.logo}>
            <Image src="/assets/logo.png" alt="company logo" width={130} height={42.8} />
          </Button>
          <Box className={classes.filler} />
          <MenuList className={classes.menuList}>
            {paths.map((path) => (
              <MenuItem
                key={path}
                button
                onClick={() => router.push(path)}
                className={classes.menuItem}
              >
                <Typography variant="body1">{texts.tabLabels[path.slice(1)]}</Typography>
              </MenuItem>
            ))}
          </MenuList>

          <Hidden mdDown>
            <LangButton />
          </Hidden>
          <Typography variant="h6" style={{ color: 'black' }}>
            {'-----'}
          </Typography>
          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            onClick={() => router.push('/signin')}
            className={classes.button}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            onClick={() => router.push('/signup')}
            className={classes.button}
          >
            Sign Up
          </Button>
          <IconButton onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}>
            <FontAwesomeIcon icon={faUserCircle} />
          </IconButton>
          <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            placement={'bottom-end'}
            transition
            disablePortal
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, 30]
                }
              }
            ]}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={50}>
                <Paper className={classes.paper}>
                  <Button
                    variant="contained"
                    disableElevation
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    onClick={() => router.push('/profile')}
                    className={classes.button}
                  >
                    My Profile
                  </Button>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.displayName = 'Header'

export default withTexts(Header)
