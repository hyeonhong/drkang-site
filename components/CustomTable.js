/* eslint-disable multiline-ternary */

import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

import tableData from 'contents/tableData'

const useStyles = makeStyles((theme) => ({
  table: {
    // whiteSpace: 'pre-line',
    // maxWidth: '100%'
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  }
}))(TableCell)

export default function CustomTable({ table }) {
  const classes = useStyles()

  const { header, rows } = tableData[table]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        {/* <colgroup>
        <col className={classes.headColumn} />
        <col className={classes.dataColumn} />
      </colgroup> */}
        <TableHead>
          <TableRow>
            {header.map((column, index) => (
              <StyledTableCell
                key={index}
                align={index === header.length - 1 ? 'right' : 'left'}
                className={index === header.length - 1 ? classes.lastCell : classes.cell}
              >
                {column}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, i) =>
                Array.isArray(cell) ? (
                  <TableCell key={i} rowSpan={cell[0]} className={classes.cell}>
                    {cell[1]}
                  </TableCell>
                ) : (
                  <TableCell
                    key={i}
                    align={i === row.length - 1 ? 'right' : 'left'}
                    className={i === row.length - 1 ? classes.lastCell : classes.cell}
                  >
                    {cell}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
