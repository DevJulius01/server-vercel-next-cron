import axios from 'axios';
const { ACCESS_KEY } = process.env

export default function script(req, res) {
    axios.get('https://server-vercel-next-cron.vercel.app/api?access=1234')
        .then(data => { console.log(data) })
        .catch(
            (err) => {
                console.log(err.message)
            }
        )

}