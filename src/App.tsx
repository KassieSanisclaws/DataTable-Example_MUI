import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { DataGridPro } from '@mui/x-data-grid-pro'
import { useDemoData } from '@mui/x-data-grid-generator'
import './App.css'

function App() {
  const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100000, editable: true });
  
  return (
    <Box sx={{ height: 520, width: "100%" }}>

      <Typography
          variant="h3"
          component="h3"
          sx={{textAlign: "center", mt: 3, mb: 3 }}>
          My Data Table Example
      </Typography>
      
      <DataGridPro  
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableRowSelectionOnClick>
            
          </DataGridPro>
     
     
    </Box>
  )
}

export default App
