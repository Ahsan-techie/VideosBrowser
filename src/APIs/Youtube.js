import axios from "axios"
const KEY = "AIzaSyDpDXJPgL3ZTlaBuIp8vR7lh3KpU42r7Ho"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})