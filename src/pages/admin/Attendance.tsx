import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { NONAME } from 'dns';

interface Column {
  id: 'name' | 'department' | 'role' | 'date' | 'attendance';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'department', label: 'Department', minWidth: 100 },
  { id: 'role', label: 'Role', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'attendance', label: 'Attendance', minWidth: 170 },
];

interface Data {
  name: string;
  department: string;
  role: string;
  date: any;
  attendance: string;
}

function createData(name: string, department: string, role: string, date: any, attendance: string): Data {
  return { name, department, role, date, attendance };
}


const rows = [
  createData('Elvis Presley', 'Flutter', 'Admin', '16 Mar, 2019', 'Present'),
  createData('Michael Jackson', 'MERN', 'User', '16 Mar, 2019', 'Present'),
  createData('Paul McCartney', 'MERN', 'User', '16 Mar, 2019', 'Present'),
  createData('Elvis Presley', 'Flutter', 'User', '16 Mar, 2019', 'Present'),
  createData('Michael Jackson', 'Flutter', 'Admin', '16 Mar, 2019', 'Present'),
  createData('Tom Scholz', 'C#/Python', 'User', '16 Mar, 2019', 'Present'),
  createData('Paul McCartney', 'MERN', 'User', '16 Mar, 2019', 'Present'),
  createData('Elvis Presley', 'C#/Python', 'User', '16 Mar, 2019', 'Present'),
  createData('Michael Jackson', 'Flutter', 'Super Admin', '16 Mar, 2019', 'Present'),
  createData('Elvis Presley', 'C#/Python', 'User', '15 Mar, 2019', 'Present'),
  createData('Bruce Springsteen', 'C#/Python', 'User', '15 Mar, 2019', 'Present'),
  createData('Paul McCartney', 'MERN', 'Admin', '15 Mar, 2019', 'Present'),
  createData('Tom Scholz', 'C#/Python', 'User', '15 Mar, 2019', 'Present'),
  createData('Michael Jackson', 'Flutter', 'User', '15 Mar, 2019', 'Present'),
  createData('Elvis Presley', 'MERN', 'User', '15 Mar, 2019', 'Present'),
];


function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 440,
  },
}));

export default function Attendance() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <React.Fragment>
      <Title>Attendance
      
      <Button color="primary" variant="contained" style={{marginLeft:'86%',width:'max-content'}}>
        <a href="/AddAttendance" style={{textDecoration:'none', color:'white'}}>Add Attendance</a>
      </Button>
      
      </Title>
      <Paper>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>
                  Action
                </TableCell>
                <TableCell>
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.department}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                    <Button color="primary" variant="contained" style={{marginRight:10}}>
                    <a href="/EditAttendance" style={{textDecoration:'none', color:'white'}}>Edit</a>
                    </Button>
                    </TableCell>
                    <TableCell>
                    <Button color="secondary" variant="contained" style={{marginRight:10}}>Delete</Button>
                    </TableCell>
                  </TableRow>

                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </React.Fragment>
  );
}