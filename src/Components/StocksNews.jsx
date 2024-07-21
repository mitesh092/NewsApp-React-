import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import "./StockNews.css"


const getContent = (txt)  => {
    let text  = document.getElementById("text");
    text.innerText = txt;

}
const Extralink = (extraLink) =>{
    let links = document.getElementById("forwardLink");
    links.href = extraLink;

}
const setTtitle = (Title) => {
    let title = document.getElementById("title");
    title.innerText = Title;
}

const ConfigHeading = (heading) => {
    let newheading = document.getElementsByTagName("h3");
    newheading[0].innerText = heading;

    
    

}
const getDescription = (response, value) => {
    const desc  = response.data.articles[value].description;
    let p = document.getElementById("desc");
    p.innerText = desc;


}
const StocksNews = ({value}) => {
    const [newsimg, Setnewsimg] = useState("");

    const Api_Key  = "xyz"//  replce your api key
    const URL_stock_api = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${Api_Key}`

    useEffect(() => {
        // IFFE : imediate 
        ;(async () => {
            const response  = await axios.get(URL_stock_api);
            const heading  = response.data.articles[value].source.name; 
            ConfigHeading(heading);
            const new_img = response.data.articles[value].urlToImage;
            const Title  = response.data.articles[value].title;
            const extraLink  = response.data.articles[value].url;
            setTtitle(Title);
            Setnewsimg(new_img);
            getDescription(response, value);
            Extralink(extraLink); 
            const txt  = response.data.articles[value].content;
            getContent(txt);

        })()
    }, [])
   
    
  return (
    <div className='StockNews' >
        <div className='imgContainer' style={{backgroundImage : `url(${newsimg})`}}>
        </div>
        <h1 id='title'> </h1>
        <p id='desc'>Description : </p>
        <p id='text'>info</p>
        <a href="/" id='forwardLink' target='__blank'><button id='info'>More Info</button></a>
        
      
    </div>
  )
}

export default StocksNews
