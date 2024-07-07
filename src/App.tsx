import React, { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator'
import './App.css'
import { getColumns } from './components/DataGrid/Columns/columns'
import CustomPaginationTwo from './components/DataGrid/Pagination/customPaginationTwo';


function App() {
  const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100000, editable: true });
  const [alternateMedia, setAlternateMedia] = useState<string>("1");

 const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlternateMedia(e.target.value);
  };

  const columns = useMemo(() => getColumns(alternateMedia, handleChange), [alternateMedia]);
  
  return (
    <>
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
          slots={{
            pagination: CustomPaginationTwo,
          }}
          />
    </Box>
    </>
  )
}

export default App
