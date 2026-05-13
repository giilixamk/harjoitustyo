import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material"

export default function TuoteKortti({ tuote, lisaaOstoskoriin, yritys }: any) {

    const alennettu = (tuote.hinta * 0.745).toFixed(2)

    return (
        <Card sx={{ width: 250 }}>
            <CardMedia
                component="img"
                height="160"
                image={tuote.kuva}
            />

            <CardContent>

                <Typography variant="h6">
                    {tuote.nimi}
                </Typography>

                {yritys ? (
                    <>
                        <Typography sx={{ textDecoration: "line-through" }}>
                            {tuote.hinta} €
                        </Typography>

                        <Typography color="green">
                            {alennettu} €
                        </Typography>
                    </>
                ) : (
                    <Typography>
                        {tuote.hinta} €
                    </Typography>
                )}

                <Button
                    variant="contained"
                    sx={{ 
                        mt: 1,
                        backgroundColor: "#6b6b6b",
                        color: "#fff"
                     }}
                    onClick={() => lisaaOstoskoriin(tuote)}
                >
                    Lisää ostoskoriin
                </Button>

            </CardContent>
        </Card>
    )
}