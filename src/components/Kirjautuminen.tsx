import { TextField, Button, Typography } from "@mui/material"
import { useState } from "react"

export default function Kirjautuminen({ setYritys }: any) {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [logged, setLogged] = useState(false)

    function login() {

        if (user === "katselu" && pass === "passu123") {
            setLogged(true)
            setYritys(true)
        }
    }

    
function logout() {
    setLogged(false)
    setUser("")
    setPass("")
    setYritys(false)
}

if (logged) {
    return (
        <>
            <Typography>
                Olet kirjautunut sisään yritystunnuksella: katselu
            </Typography>

            <Button onClick={logout}>
                Kirjaudu ulos
            </Button>
        </>
    )
}

return (
    <>
        <TextField
            label="Tunnus"
            value={user}
            onChange={(e) => setUser(e.target.value)}
        />

        <TextField
            label="Salasana"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
        />

        <Button 
        variant="contained"
        sx={{ 
            backgroundColor: "#6b6b6b",
            color: "#fff",
            mt: 1
        }} 
        onClick={login}
        >
            Kirjaudu
        </Button>
    </>
    )
}