import { Typography, Box } from "@mui/material"

export default function VerkkokauppaFooter() {
    const year = new Date().getFullYear()

    return (
        <Box sx={{ textAlign: "center", p: 2, mt: 4, background: "#eee"}}>
            <Typography>
                ILOLA | info@ilola.fi
            </Typography>

            <Typography>
                © {year}
            </Typography>
        </Box>
    )
}