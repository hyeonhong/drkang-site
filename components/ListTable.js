import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  // TableContainer,
  // TableHead,
  TableRow
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  table: {
    whiteSpace: 'pre-line',
    maxWidth: '100%'
  },
  headColumn: {
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      width: '30%'
    }
  },
  dataColumn: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: '70%'
    }
  }
}))

export default function ListTable({ rows }) {
  const classes = useStyles()

  return (
    <Table className={classes.table}>
      <colgroup>
        <col className={classes.headColumn} />
        <col className={classes.dataColumn} />
      </colgroup>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th">
              <strong>{row.category}</strong>
            </TableCell>
            <TableCell>{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
