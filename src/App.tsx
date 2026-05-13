import { useState } from "react"
import { Grid, Box } from "@mui/material"
import './App.css'

import VerkkokauppaHeader from "./components/VerkkokauppaHeader"
import VerkkokauppaFooter from "./components/VerkkokauppaFooter"
import Tuotenostot from "./components/Tuotenostot"
import Kirjautuminen from "./components/Kirjautuminen"
import Ostoskori from "./components/Ostoskori"

function App() {

  const [ostoskori, setOstoskori] = useState<any[]>([])
  const [yritys, setYritys] = useState(false)

  function lisaaOstoskoriin(tuote: any) {

    const existing = ostoskori.find(t => t.id === tuote.id)

    if (existing) {

      setOstoskori(
        ostoskori.map(t =>
          t.id === tuote.id
            ? { ...t, maara: t.maara + 1 }
            : t
        )
      )

    } else {

      setOstoskori([
        ...ostoskori,
        { ...tuote, maara: 1 }
      ])
    }
  }

  return (
    <>
      <VerkkokauppaHeader />

      <h2 style={{ textAlign: "center"}}>
        Käsintehtyä vaatteita vauvan arkeen
      </h2>

      <Grid container spacing={3} sx={{ padding: 3}}>

      {/* TUOTTEET */}
      <Grid size={9}>
        <Tuotenostot
          lisaaOstoskoriin={lisaaOstoskoriin}
          yritys={yritys}
        />
      </Grid>

      {/* OIKEA PALSTA */}
        <Grid size={3}>

          <Box sx={{ marginBottom: 4}}>
            <Kirjautuminen setYritys={setYritys} />
          </Box>

          <Box>
            <Ostoskori ostoskori={ostoskori} />
          </Box>

        </Grid>

      </Grid>

      <VerkkokauppaFooter />
    </>
  )
}

export default App