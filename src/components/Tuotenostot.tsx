import tuotteet from "../data/tuotteet"
import TuoteKortti from "./TuoteKortti"
import { Grid } from "@mui/material"

export default function Tuotenostot({ lisaaOstoskoriin, yritys }: any) {

    return (
        <Grid container spacing={1}>
            {tuotteet.map((tuote: any) => (
                <Grid size={4} key={tuote.id}>
                    <TuoteKortti
                        tuote={tuote}
                        lisaaOstoskoriin={lisaaOstoskoriin}
                        yritys={yritys}
                    />
                </Grid>
            ))}
        </Grid>
    )
}