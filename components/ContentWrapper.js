import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab, Typography, Box } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '100%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 200
  },
  tab: {
    textTransform: 'none',

    [theme.breakpoints.up('sm')]: {
      // paddingLeft: theme.spacing(8),
      '& span': {
        alignItems: 'flex-start' // left align
      }
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 50
    }
  },
  activeTab: {
    backgroundColor: '#f1f1f1'
  }
}))

export default function ContentWrapper({ tabLabels, components }) {
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
        textColor="secondary"
        // TabIndicatorProps={{
        //   style: {
        //     backgroundColor: '#19857b'
        //   }
        // }}
      >
        {components.map((Component, index) => (
          <Tab
            key={index}
            label={<Typography variant="body1">{tabLabels[index]}</Typography>}
            className={clsx(classes.tab, tabValue === index && classes.activeTab)}
          />
        ))}
      </Tabs>

      <Box sx={{ width: '100%', marginLeft: 10 }}>
        {components.map((Component, index) => (
          <Box key={index} sx={{ ...(tabValue !== index && { display: 'none' }) }}>
            <Component />
          </Box>
        ))}
      </Box>
    </div>
  )
}
