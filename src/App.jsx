import { useState, useEffect, react } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Newscart from "./Components/Newscart";
import "./Components/Resonsive.css";
import StocksNews from "./Components/StocksNews";

function App() {
  let Imgurls = [
    "https://images.hindustantimes.com/img/2024/07/16/550x309/AP07-16-2024-000028A-0_1721154185727_1721154214670.jpg",
    "https://image.cnbcfm.com/api/v1/image/107205410-1678310005858-aa8_img_100_99_112_1877665_1000-1678309923579.jpg?v=1678310172&w=929&h=523&vtcrop=y",
    "https://www.fisdom.com/wp-content/uploads/2022/01/shutterstock_332980589_11zon.webp",
    "https://images.moneycontrol.com/static-mcnews/2023/08/stocks_sensex_nifty_stockmarket1-770x433.jpg?impolicy=website&width=400&height=225",

    "https://www.5paisa.com/mutual-funds/wp-content/uploads/cropped-stock-market-news-cover.jpg?x19501",

    "https://www.wallstreetzen.com/blog/wp-content/uploads/2022/07/lucas-hoang-VgU5zIEy57A-unsplash-scaled.jpg",

    "https://thumbs.dreamstime.com/b/business-news-24223829.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/68/87/business-news-live-on-world-map-background-stock-vector-25856887.jpg",

    "https://images.indianexpress.com/2024/07/Biden-AP-1.jpg?w=480",
    "https://ichef.bbci.co.uk/news/480/cpsprodpb/0CE4/production/_117600330_indexmetrotimes1703.png",
    "https://www.livemint.com/lm-img/img/2024/07/10/600x338/20240710-MUM-RS-MN-Mihir-Shah-003-0_1720631549234_1720631572049.jpg",
    "https://images.hindustantimes.com/img/2024/07/15/550x309/Trump-Classified-Documents-0_1721061567073_1721067813554.jpg",
    "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
    "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.hindustantimes.com/img/2024/07/18/550x309/kangana_ranaut-chirag_1721273458661_1721273468913.jpg",
    "https://images.news18.com/ibnlive/uploads/2024/07/india-vs-sri-lanka-squads-announcement-live-updates-today-2024-07-2ccaed277716c4903edec1005d4cca66-3x2.jpg?impolicy=website&width=360&height=240",
    "https://img.etimg.com/thumb/height-450,width-600,resizemode-4,imgsize-108886,msid-111740654/us-presidential-elections-2024-highlights-news-updates-donald-trump-to-announce-his-vp-pick-today.jpg"
  ];

  const [showMain, setShowMain] = useState(true);
  const [value, setValue] = useState(0);

  const handleClick = (index) => {
    setShowMain(false);
    let keyofdata = document.getElementsByClassName("getdata");
    for (let i = 0; i < keyofdata.length; i++) {
      if (keyofdata[i].id == index) {
        setValue(index);
        break;
      }
    }
  };

  const newcartadd = Array.from({ length: Imgurls.length }, (_, index) => (
    <div
      className="getdata"
      key={index}
      id={index}
      onClick={() => handleClick(index)}
    >
      <Newscart imageUrl={Imgurls[index]} />
    </div>
  ));

  return (
    <>
      <Navbar name="NewApp" />
      <h3>Local Hero Honored for Acts of Bravery</h3>
      {showMain ? <main>{newcartadd}</main> : <StocksNews value={value} />}
    </>
  );
}

export default App;
