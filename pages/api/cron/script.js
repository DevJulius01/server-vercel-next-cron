const { ACCESS_KEY } = process.env

export default function script(req, res) {
    fetch(`/api?access=${ACCESS_KEY}`).then((res) => res.json())
        .then(data => { console.log(data) })
        .catch(
            (err) => {
                console.log(err.message)
            }
        )
}