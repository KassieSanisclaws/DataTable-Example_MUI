import { Button, Typography } from "@mui/material";

export const buttons = [
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