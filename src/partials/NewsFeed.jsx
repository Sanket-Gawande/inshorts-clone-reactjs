
import { useState , useEffect } from "react";
import appstore from '../images/appstore.png'
import playstore from '../images/playstore.png'
import loading from '../images/loading-icon.svg'
import Card from "./Card";
import axios from 'axios'


import './CSS/newsfeed.css'

function NewsFeed(props) {

const [articles , setArticles] = useState([{title : 'Hold on ,  content is loading...' , image : loading}])
var [scroll , setScroll] = useState(0)

useEffect( () => {
    axios.get(`https://inshot.herokuapp.com/v1/${props.category}`)
    .then( res => {  setArticles(res.data.data) ; console.log(res)})
    .catch(err => console.log(err))
} , [scroll])

fetch('/home').then(data => console.log(data)).catch(err => console.log(err))
    return (
        <div className="container">
            <div className="ad">
                <p className="ad-text">
                    For the best experience use <b> inshorts </b> app on your smartphon
                </p>
                <div className="app-links">
                   <img src={playstore} alt="Playsote" />
                  <img src={appstore} alt="Appstore" />
                </div>

            </div>
            <div className="news">
               
                 {articles.length > 0 && articles.map(item => {
                       return (
                           <Card  
                           key = {item.timeStamp}
                           article = {item}
                           />
                       )
                   } )}
               
            </div>
        </div>
    )
}

export default NewsFeed;
