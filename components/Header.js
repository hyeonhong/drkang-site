/* eslint-disable multiline-ternary */

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'
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
  IconButton,
  Menu,
  Hidden,
  Drawer
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from 'utils/auth/firebaseClient'
import withTexts from 'utils/hoc/withTexts'
import LangButton from 'components/LangButton'

const useStyles = makeStyles((theme) => ({
  appBar: {
    // backgroundColor: (props) => `rgba(231,170,148,${props.opacity})`,
    backgroundColor: '#fff',
    boxShadow: 'none'
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
    padding: 0
  },
  menuItem: {
    // display: 'flex',
    justifyContent: 'center',
    minWidth: 100,
    borderRadius: 8,
    color: 'black'
  },
  menuItemText: {
    paddingBottom: theme.spacing(0.5)
  },
  activeMenuItem: {
    borderBottom: `3px solid ${theme.palette.primary.main}`
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  },
  avatarItem: {
    minWidth: 200
  },
  drawerMenuItem: {
    justifyContent: 'center'
  }
}))

const Header = ({ texts }) => {
  const classes = useStyles()
  const router = useRouter()
  const { user, signOut } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const paths = Object.keys(texts.tabLabels)

  // const isTablet = useMediaQuery('(max-width:768px)')

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button onClick={() => router.push('/')} color="inherit" className={classes.logo}>
            <Image src="/assets/logo.png" alt="company logo" width={130} height={42.8} />
          </Button>
          <Box className={classes.filler} />
          <Hidden smDown>
            <MenuList className={classes.menuList}>
              {paths.map((path) => (
                <MenuItem
                  key={path}
                  button
                  onClick={() => router.push(path)}
                  className={classes.menuItem}
                >
                  <Typography
                    variant="body1"
                    className={clsx(
                      classes.menuItemText,
                      router.pathname === path && classes.activeMenuItem
                    )}
                  >
                    {texts.tabLabels[path]}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
            <LangButton />
            {user ? (
              <>
                <IconButton onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}>
                  <FontAwesomeIcon icon={faUserCircle} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  {/* <MenuItem
                  onClick={() => {
                    setAnchorEl(null)
                    router.push('/profile')
                  }}
                  className={classes.avatarItem}
                >
                  {texts.profile}
                </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null)
                      signOut()
                      router.push('/')
                    }}
                    className={classes.avatarItem}
                  >
                    {texts.signOut}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  disableElevation
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  onClick={() => router.push('/signin')}
                >
                  {texts.signIn}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  onClick={() => router.push('/signup')}
                >
                  {texts.signUp}
                </Button>
              </>
            )}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <Hidden smUp>
        <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div onClick={() => setDrawerOpen(false)} className={classes.hamburgerMenu}>
            <Box sx={{ marginBottom: 10 }} />
            <MenuList>
              {paths.map((path) => (
                <MenuItem
                  key={path}
                  onClick={() => router.push(path)}
                  classes={{ root: classes.drawerMenuItem }}
                >
                  {texts.tabLabels[path]}
                </MenuItem>
              ))}
            </MenuList>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

Header.displayName = 'Header'

export default withTexts(Header)
