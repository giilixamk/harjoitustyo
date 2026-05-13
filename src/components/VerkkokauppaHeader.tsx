import { AppBar, Toolbar, Typography } from "@mui/material"

export default function VerkkokauppaHeader() {
    return (
        <AppBar position="static" sx={{ background: "#ffffff", color: "#222" }}>
            <Toolbar sx={{ justifyContent: "center" }}>
                <Typography 
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        letterSpacing: 3,
                        fontFamily: "Georgia, serif"
                    }}
                >

                    ILOLA
                </Typography>
            </Toolbar>
        </AppBar>    
    )
}