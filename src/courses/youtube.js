import axios from "axios";
const KEY = 'AIzaSyBksNA-tfgyl4yxxSfnYjKKCc2zQXJ0fx4'
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY
    }
})