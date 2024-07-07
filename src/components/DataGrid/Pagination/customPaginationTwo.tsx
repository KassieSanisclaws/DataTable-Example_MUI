// CustomPagination.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useGridApiContext, useGridSelector, gridPageSizeSelector, gridPageCountSelector, gridPaginationModelSelector, gridRowCountSelector } from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';

const CustomPaginationTwo = (props: any) => {
    const apiRef = useGridApiContext();
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
    const rowCount = useGridSelector(apiRef, gridRowCountSelector);
    const pageSizes = [5, 10, rowCount];
    
    
    const handlePageChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
        e.preventDefault();
        apiRef.current.setPage(newPage - 1);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        apiRef.current.setPageSize(newPageSize);
    };

    return (
        <Box {...props} 
            sx={{ 
             display: 'flex', 
             justifyContent: 'space-between', 
             alignItems: 'center', 
             padding: 2, 
             width: "100%" 
            }}
          >
         <Box sx={{ 
               border: "1px solid red"
              }}
            >
            {pageSizes.map((size) => (
                <Button
                   key={size}
                   onClick={() => handlePageSizeChange(size)}
                   sx={{
                       backgroundColor: pageSize === size  ? '#FF2456' : 'inherit',
                       color: pageSize === size  ? 'white' : 'inherit',
                       marginRight: 1,
                       width: 34,
                       height: 33,
                       minWidth: 34,
                       borderRadius: "50%",
                     }}
                   >
                    {size === rowCount ? <Typography variant='subtitle2' sx={{ textTransform: "lowerCase" }}>All</Typography> : size}
                </Button>
                ))}
            </Box>

           <Box sx={{ width: "33vw", display: "flex", justifyContent: "space-evenly" }}> 
            <Typography 
                 variant='subtitle2'
                 sx={{ 
                    mt: .5 
                   }}
                 >
                  Page {paginationModel.page + 1} of {pageCount} ({rowCount} items)
            </Typography>

            <MuiPagination
                color="secondary"
                count={pageCount}
                page={paginationModel.page + 1}
                onChange={handlePageChange}
            />
            </Box>
        </Box>
    );
};

export default CustomPaginationTwo;
