import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Menu, MenuItem, Typography } from '@material-ui/core'

import { useLang } from 'utils/hook/useLang'

const useStyles = makeStyles((theme) => ({
  langButton: {
    textTransform: 'none'
    // minWidth: 0 // override the default minWidth
    // marginRight: theme.spacing(4)
  },
  langText: {
    '&::after': {
      display: 'inline-block',
      content: '""', // NB: Use quotes twice
      marginLeft: '.3rem',
      verticalAlign: '.255rem',
      borderLeft: '.3rem solid transparent',
      borderRight: '.3rem solid transparent',
      borderTop: '.3rem solid'
    }
  }
}))

export default function LangButton() {
  const classes = useStyles()
  const { lang, switchLang } = useLang()
  const [langAnchor, setLangAnchor] = useState(null)

  return (
    <>
      <Button
        disableElevation
        disableRipple
        disableFocusRipple
        disableTouchRipple
        variant="outlined"
        onClick={(e) => setLangAnchor(e.currentTarget)}
        className={classes.langButton}
      >
        <Typography variant="body1" align="center" color="textPrimary" className={classes.langText}>
          Language
        </Typography>
      </Button>
      <Menu
        id="lang-dropdown-menu"
        anchorEl={langAnchor}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        open={Boolean(langAnchor)}
        onClose={() => setLangAnchor(null)}
        TransitionProps={{
          timeout: 0 // Disable transition
        }}
      >
        <MenuItem
          onClick={() => {
            lang !== 'kr' && switchLang('kr')
            setLangAnchor(null)
          }}
          style={{ width: 120 }}
        >
          한국어
        </MenuItem>
        <MenuItem
          onClick={() => {
            lang !== 'en' && switchLang('en')
            setLangAnchor(null)
          }}
          style={{ width: 120 }}
        >
          English
        </MenuItem>
      </Menu>
    </>
  )
}
