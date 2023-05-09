import { useMemo, useState } from 'react'
import './App.css'
import fakeData from "./MOCK_DATA.json"
import { useTable } from 'react-table'

function App() {

  const data = useMemo(() => fakeData, []);
    // in react-table a column is something that has a header
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'University',
      accessor: 'university',
    },
  ], []);

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getHeaderProps} = useTable({ columns, data }); //this useTable returns a bunch of functions that we can destructure




  console.log(fakeData)
  return (
    <div className='App'>
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row) // this function is used to prepare the row for rendering
              return(
                <tr {...row.getRowProps}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
