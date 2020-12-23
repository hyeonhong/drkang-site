import Image from 'next/image'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import {
  useMediaQuery,
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  MenuList,
  MenuItem,
  Typography,
  Hidden
} from '@material-ui/core'

import { useLang } from '../utils/hooks/useLang'
import LangButton from '../components/LangButton'
import navbarTabs from '../contents/navbarTabs'

const useStyles = makeStyles((theme) => ({
  appBar: {
    // backgroundColor: (props) => `rgba(231,170,148,${props.opacity})`,
    backgroundColor: '#fff'
    // boxShadow: 'none'
  },
  title: {
    justifyContent: 'start',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    },
    padding: 0,
    display: 'inline-block'
    // objectFit: 'contain'
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
  }
}))

export default function Header() {
  const classes = useStyles()
  const router = useRouter()
  const { lang } = useLang()
  const tabs = navbarTabs[lang]

  const isTablet = useMediaQuery('(max-width:768px)')

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button onClick={() => router.push('/')} color="inherit" className={classes.title}>
            <Image src="/assets/logo.svg" alt="company logo" width={97.98} height={40} />
          </Button>
          <Box className={classes.filler} />
          <MenuList className={classes.menuList}>
            {tabs.map((tab) => (
              <MenuItem
                key={tab.label}
                button
                onClick={() => router.push(tab.path)}
                className={classes.menuItem}
              >
                <Typography variant="body1">
                  {isTablet ? tab.label.slice(0, 4) : tab.label}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>

          <Hidden smDown>
            <LangButton />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
