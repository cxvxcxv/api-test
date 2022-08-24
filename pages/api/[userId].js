import axios from "axios";

export default async function getUserId (req, res) {
    const { userId } = req.query;
    const answer = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    await res.json(answer.data)
}