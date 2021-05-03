/*import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./index.css"
export default function Index() {
    const [data,setData] = useState([])
    const [row,setRow] = useState('')

    const fetchData = async () => {
      const result = await axios(
        '/api/api/check',
      );
 
      setData(result.data);
    };

    useEffect(() => {
          fetchData();
    },[])

    return (
           <table className="ledger">
                <tr className="ledger-row">
                    <td className="ledger-col ledger-title">Comment</td>
                    <td className="ledger-col ledger-title">Feedback</td>
                    <td className="ledger-col ledger-title">Link</td>
                </tr>
                {
                    data.slice().map((item,index) => <tr className="ledger-row">
                      <td className="ledger-col">{item.Comment}</td>
                      <td className="ledger-col">{item.feedback}</td>
                      <td className="ledger-col">{item.link}</td>
                    </tr>)
                }
            </table>
    )
}
*/

import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios"
const columns = [

  {
    id: 'link',
    label: 'Link',
    minWidth: 70,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Comment',
    label: 'Comment',
    minWidth: 70,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'feedback',
    label: 'Feedback',
    minWidth: 70,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];



const useStyles = makeStyles({
  root: {
    width: '98%',
    margin:"auto"
  },
  container: {
    maxHeight: 840,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [data,setData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const fetchData = async () => {
    const result = await axios(
      '/api/check',
    );
    await setData(result.data.reverse())

  };

  useEffect(() => {
        fetchData();

  },[])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Paper className={classes.root} >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,border:"none",borderBottom:"1px solid lightgray", background:"#f7f7f7" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{border:"none",borderBottom:"1px solid lightgray", background:"white",maxWidth:"20px",overflow:"hidden"}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}