const { ACCESS_KEY } = process.env

export default function script(req, res) {
    const url = new URL(`/api?access=${ACCESS_KEY}`)
    fetch(url).then((res) => res.json())
        .then(data => { console.log(data) })
        .catch(
            (err) => {
                console.log(err.message)
            }
        )
}