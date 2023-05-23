const { ACCESS_KEY } = process.env

export default function script(req, res) {
    fetch('https://server-vercel-next-cron.vercel.app/api?success=1234').then((res) => res.json())
        .then(data => { console.log(data) })
        .catch(
            (err) => {
                console.log(err.message)
            }
        )
}