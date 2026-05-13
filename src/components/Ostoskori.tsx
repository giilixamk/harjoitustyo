import { Typography, Button, Alert, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import { useState } from "react"

export default function Ostoskori({ ostoskori }: any) {

    const [tilattu, setTilattu] = useState(false)
    const [open, setOpen] = useState(false)

    const maara = ostoskori.reduce((sum: number, t: any) => sum + t.maara, 0)
    const summa = ostoskori.reduce((sum: number, t: any) => sum + t.hinta * t.maara, 0)

    return (
        <Paper sx={{ p: 2 }}>

            {maara === 0 ? (
                <Typography>
                    Ostoskorissa ei ole tuotteita
                </Typography>
            ) : (
             <>
                <Typography>
                    Ostoskorissa on {maara} tuotetta, loppusumma {summa.toFixed(2)} €
                </Typography>

                <Button
                    variant="contained"
                    sx={{ 
                        backgroundColor: "#6b6b6b",
                        color: "#fff",
                        mt: 1 
                    }}
                    onClick={() => {
                        setTilattu(true)
                        setOpen(true)
                    }}
                >
                    Tilaa
                </Button>
             </>
        )}

        {tilattu && (
            <Alert severity="success">
                Tilaus suoritettu onnistuneesti
            </Alert>
            )}

        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Tilattavat tuotteet</DialogTitle>

            <DialogContent>
                {ostoskori.map((t: any) => (
                    <Typography key={t.id}>
                        {t.nimi} - {t.maara} kpl
                    </Typography>
                ))}
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Sulje</Button>
                </DialogActions>
        </Dialog>
        </Paper>
    )
}