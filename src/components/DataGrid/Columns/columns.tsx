import React from "react";
import { Box, Button, ButtonGroup, FormControl, NativeSelect, Typography } from "@mui/material";
import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { buttons } from "../Buttons/quantity";


export const getColumns = (alternateMedia: string, handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void): readonly GridColDef<GridValidRowModel>[] => [
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
            <Button variant="text" color="primary" sx={{ borderRadius: "50px", maxHeight: "25px", border: "2px solid grey", }}>
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
        valueOptions: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
        editable: true,
        renderCell: () => (
            <Box sx={{ borderRadius: "50px", maxHeight: "21px", margin: "12.5px 0 0 21px", width: "50px", border: "2px solid grey", }}>
                <FormControl variant='standard'>
                    <NativeSelect
                        id="alternateMedia"
                        value={alternateMedia}
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
            <Box sx={{ maxWidth: "40vw", overflow: "hidden", }}>
                <ButtonGroup size="small" sx={{ width: "100%", mt: .9, height: "37px", }}>
                    {buttons}
                </ButtonGroup>
            </Box>
    },
    {
        field: "button",
        headerName: "",
        width: 100,
        renderCell: () => <Button variant="contained" color="secondary"> Add </Button>
    },
];