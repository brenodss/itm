import { DataGrid, GridColDef, GridRowId, GridRowModel, GridValueGetterParams } from '@mui/x-data-grid';
import './styles.css'



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'tableHeader' },
  { field: 'firstName', headerName: 'First name', width: 130, headerClassName: 'tableHeader' },
  { field: 'lastName', headerName: 'Last name', width: 130, headerClassName: 'tableHeader' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    headerClassName: 'tableHeader'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    headerClassName: 'tableHeader',
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, getRowClassName: 'tableRow' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: <button>Teste</button> },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div className='w-[80%] h-[400px] relative left-[17%] top-[50%]'>
      <DataGrid
          sx={{
            boxShadow: 10,
            border: 1,
            fontSize: '16px',
            width: '100%',
          }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}