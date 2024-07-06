import { useMemo, useState } from 'react'
import { Box, Typography, Button, FormControl, NativeSelect, ButtonGroup, TablePaginationProps, } from '@mui/material'
import { DataGrid, GridColDef, GridValidRowModel, gridPageCountSelector, useGridSelector, useGridApiContext, GridPagination, } from '@mui/x-data-grid'
import MuiPagination from "@mui/material/Pagination";
import { useDemoData } from '@mui/x-data-grid-generator'
import './App.css'

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="secondary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

function App() {
  const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100000, editable: true });
  const [pageSize, setPageSize] = useState(100);
  const [alternateMedia, setAlternateMedia] = useState<string>("1");



  const buttons = [
    <Button 
      disableRipple
      sx={{ 
          border: "none",
          backgroundColor: "rgba(211, 211, 211, 0.5)", // faded grey/cream background color
         

        "&:hover": {
          border: "none",
          backgroundColor: "rgba(211, 211, 211, 0.5)", // keep the same background color on hover
          }, 
        }}
        >
          <Typography variant="h6" sx={{ color: "GrayText" }}>
              -
          </Typography>
    </Button>,
    <Button 
      disableRipple
      sx={{ 
        border: "none",
        backgroundColor: "rgba(211, 211, 211, 0.5)", // faded grey/cream background color 

        "&:hover": {
          border: "none",
          backgroundColor: "rgba(211, 211, 211, 0.5)", // keep the same background color on hover
        },
         }}
       >
      <Typography variant="body2" sx={{ color: "GrayText" }}>
          1
        </Typography>
    </Button>,
    <Button
        disableRipple 
        sx={{ 
          border: "none",
          backgroundColor: "rgba(211, 211, 211, 0.5)", // faded grey/cream background color
          borderBlock: "none",

          "&:hover": {
            border: "none",
            backgroundColor: "rgba(211, 211, 211, 0.5)", // keep the same background color on hover
            },
          }}
        >
      <Typography variant="h6" sx={{ color: "GrayText" }}>
          +
        </Typography>
    </Button>,
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlternateMedia(e.target.value);
  };

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
      width: 90,
      renderCell: () => 
        <Button variant="text" color="primary" sx={{ borderRadius: "50px",  maxHeight: "25px", border: "2px solid grey", }}>
          <Typography 
               variant="subtitle2" 
               color="primary"
               fontSize={11}
               sx={{ color: "black" }}
               >
                View
          </Typography>
        </Button>
    },
    {
      field: "alternateMedia",
      headerName: "Alternate Media",
      width: 115,
      type: "singleSelect",
      valueOptions: Array.from({ length: 10}, (_, i) => (i + 1).toString()),
      editable: true,
      renderCell: () => (
        <Box sx={{ borderRadius: "50px", maxHeight: "21px", margin: "12.5px 0 0 21px", width: "50px", border: "2px solid grey", }}>
          <FormControl variant='standard'>
             <NativeSelect
                id="alternateMedia"
                value={alternateMedia}
                // label={alternateMedia}
                onChange={handleChange}
              sx={{
                  padding: "0 0 0 8px", mt: -.5, '& .MuiNativeSelect-icon': {
                  color: 'black',
                  },
               }} 
                disableUnderline 
                 >
               {Array.from({ length: 10 }, (_, i) => (
                <option 
                    key={i + 1} 
                    value={(i + 1).toString()}
                    style={{ textAlign: "center", padding: "8px", }}
                    >
                      {i + 1}
                </option>
              ))}
             </NativeSelect>
             </FormControl>
        </Box>
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
      width: 145,
      renderCell: () => 
        <Box sx={{ maxWidth: "40vw", overflow: "hidden",  }}>
           <ButtonGroup size="small" sx={{ width: "100%", mt: .9, height: "37px", }}>
             {buttons}
           </ButtonGroup>
        </Box>
    },
    {
      field: "button",
      headerName: "",
      width: 100,
      renderCell: () => <Button variant="contained" color="error">Add</Button>
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
          pagination
          slots={{ pagination: CustomPagination,}}
          initialState={{ ...data.initialState, pagination: { paginationModel: { pageSize } } }}
          paginationModel={{ pageSize, page: 0}}
          onPaginationModelChange={(newModel) => setPageSize(newModel.pageSize)}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          />
            
    </Box>
  )
}

export default App
