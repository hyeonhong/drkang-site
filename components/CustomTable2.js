import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core'

import tableData from 'contents/tableData'

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: '400px'
  },
  headColumn: {
    width: '20%'
  },
  dataColumn: {
    width: '80%'
  },
  cell: {
    paddingLeft: theme.spacing(14)
  },
  lastCell: {
    paddingRight: theme.spacing(8)
  }
}))

export default function CustomTable2({ table }) {
  const classes = useStyles()

  const rows = tableData[table]

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        {/* <colgroup>
          <col className={classes.headColumn} />
          <col className={classes.dataColumn} />
        </colgroup> */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th">
                <strong>{row[0]}</strong>
              </TableCell>
              <TableCell>{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
