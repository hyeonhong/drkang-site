import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '100%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 260
  },
  tab: {
    textTransform: 'none',

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8),
      '& span': {
        alignItems: 'flex-start' // left align
      }
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 50
    }
  },
  tabPanel: {
    marginLeft: theme.spacing(10),
    width: '100%'
  },
  displayNone: {
    display: 'none'
  }
}))

export default function MdxContainer({ tabLabels, components }) {
  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)

  return (
    <div className={classes.main}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
        className={classes.tabs}
        // TabIndicatorProps={{
        //   style: {
        //     backgroundColor: '#19857b'
        //   }
        // }}
      >
        {components.map((Mdx, index) => (
          <Tab
            key={index}
            label={<Typography variant="body1">{tabLabels[index]}</Typography>}
            className={classes.tab}
          />
        ))}
      </Tabs>

      {components.map((Mdx, index) => (
        <div
          key={index}
          className={`${classes.tabPanel} ${tabValue !== index ? classes.displayNone : ''}`}
        >
          <Mdx />
        </div>
      ))}
    </div>
  )
}
