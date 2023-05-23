import axios from 'axios';
const { ACCESS_KEY } = process.env

export default function script(req, res) {
    axios.get(`https://localhost:3000/api?access=${ACCESS_KEY}`).then((result) => {

        console.log(result);
    }).catch((err) => {
        console.log(err.message)
    });
    console.log("hola")
}