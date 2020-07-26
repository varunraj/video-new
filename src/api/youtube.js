import axios from 'axios';
const KEY = 'AIzaSyCVqm7DKXz7LiiaggqFotauJaOEuCsZ2og'


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        maxResults:5,
        key:KEY,
        type:'video'
    }

});
