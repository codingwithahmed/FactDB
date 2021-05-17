 /* import React ,{useState,useEffect} from 'react'
import './index.css'
import axios from "axios"
import SearchRounded from '@material-ui/icons/SearchRounded'
/*
   <h2>Desc : {desc} </h2>
            <h2>Remarks : {Occurence(Remarks)} </h2>
            <h2>comments </h2>
            <ul>
            {comment.map(com => <li>{com}</li>)}
            </ul>
*/ 
/*
export default function Index() {
    const [data,setData] = useState([]);
    const [link,setLink] = useState('');


    const search = () => {
          axios.post('/api/api/search',{
              link:link.trim()
          }).then((fact) => {
              setData(fact.data)
              console.log(fact)
              
          })
    }

    function Occurence(arr){
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }


    return (
        <div className="search">
            <div className='search-input'>
                <input type='search' placeholder='Paste a link to search' onChange={(e) => setLink(e.target.value) } />
            </div>
            <div className='search-btn-container'>
            <button className='search-btn' onClick={search}>Search</button>
            </div>

            <table>
                {data.map((fact) => <tr>
                      <td>{fact.feedback.map((i) => <li>{i}</li>)}</td>
                     <td>{fact.Comment.map((i) => <li>{i}</li>)}</td>
                     <td>{fact.link}</td>
                </tr>)}
            </table>

        </div>
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
import "./index.css"
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
  }
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
  const [user,setUser] = React.useState("")
  const [link,setLink] = React.useState("")
  const [search,setSearch] = React.useState("")
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count,setCount] = React.useState(1) 

  function Occurence(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
  }
  
  const fetchData = () => {
    axios.post('/api/api/search',{
        link:link.trim()
    }).then((fact) => {
        setData(fact.data)
        console.log(fact)
        
    })
}




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Paper className={classes.root} >
      
     <div className='search-input'>
       
                <input type='search' placeholder='Paste a link to search' onChange={(e) => setLink(e.target.value) } />
            </div>
            <div className='search-btn-container'>
            <button className='search-btn' onClick={fetchData}>Search</button>
            </div>
            <h2>Search result are crowd-sourced and based on individual opinions. If you do
not find news link you searched, We recommend you to Sign-up and submit
link for result. </h2>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
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