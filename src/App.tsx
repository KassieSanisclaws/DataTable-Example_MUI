import { useMemo, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import './App.css'

function App() {
  const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100000, editable: true });
  const [pageSize, setPageSize] = useState(100);

  const columns: readonly GridColDef<GridValidRowModel>[] = useMemo(() => [
    { field: "compound", headerName: "Compound", width: 200 },
    { field: "cas#", headerName: "CAS #", width: 80 },
    { field: "analyticalMethod", headerName: "Analytical Method", width: 200 },
    { field: "matrix", headerName: "Matrix", width: 80 },
    { field: "technique", headerName: "Technique", width: 80 },
    { field: "flowRate(LPM)", headerName: "Flow Rate (LPM)", width: 80 },
    { field: "sampleVolume(L)", headerName: "Sample Volume (L)", width: 80 },
    { field: "reportingLimit(ng)", headerName: "Reporting Limit (ng)", width: 80 },
    {
      field: "details",
      headerName: "Details",
      width: 100,
      renderCell: () => 
        <Button variant="text" color="primary" sx={{ borderRadius: "50px",  maxHeight: "25px", border: ".2px solid grey" }}>
          <Typography 
               variant="subtitle2" 
               color="primary"
               fontSize={11}
               >
                View
          </Typography>
        </Button>
    },
    {
      field: "alternateMedia",
      headerName: "Alternate Media",
      width: 80,
      type: "singleSelect",
      valueOptions: Array.from({ length: 10}, (_, i) => (i + 1).toString()),
      editable: true,
      renderCell: (params) => (
        <Button variant="contained" color="primary" sx={{ }}>
          {params.value}
        </Button>
      )
    },
    {
      field: "standardMedia",
      headerName: "Standard Media",
      width: 200,
    },
    {
      field: "mediaCode",
      headerName: "Media Code",
      width: 100,
    },
    {
      field: "mediaFee",
      headerName: "Media Fee",
      width: 100,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      
    },
    {
      field: "button",
      headerName: "",
      width: 100,
      renderCell: () => <Button variant="contained" color="primary">Add</Button>
    },
  ], []);
  
  return (
    <Box sx={{ height: 520, width: "100%" }}>

      <Typography
          variant="h3"
          component="h3"
          sx={{textAlign: "center", mt: 3, mb: 3 }}>
          My Data Table Example
      </Typography>
      
      <DataGrid  
          columns={columns}
          rows={data.rows}
          initialState={{ pagination: { paginationModel: { pageSize } } }}
          paginationModel={{ pageSize, page: 0}}
          onPaginationModelChange={(newModel) => setPageSize(newModel.pageSize)}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          
          >
            
          </DataGrid>
     
     
    </Box>
  )
}

export default App
