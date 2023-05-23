const { ACCESS_KEY } = process.env

export default function handler(req, res) {
    const acceso = req.query.access; // Obtener el valor del parámetro "acceso"

    // Verificar la seguridad con la llave de acceso
    if (acceso === ACCESS_KEY) {
        //script()
        console.log("did it!")
        res.status(200).send("oki doki")
    }
    else {
        res.status(403).send('Acceso no autorizado.');
    }
    // Verificar la seguridad con la llave de acceso
    if (acceso === ACCESS_KEY) {
        script()
        console.log("did it!")
        res.status(200).send("oki doki")
    }
    else {
        res.status(403).send('Acceso no autorizado.');
    }
}