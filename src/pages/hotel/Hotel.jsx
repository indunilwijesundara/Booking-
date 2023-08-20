import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"


export default function Hotel() {
 const [slideNumber,setSlideNumber] = useState(0)
 const [open,setOpen] = useState(false)
 const photos=[
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/205295075.jpg?k=7172838b4d636745f6975f4540399a402825e0565e8be2575ecb5593f4b612c6&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/220975272.jpg?k=7f9873f4cf3222ee5f3f68256e6398e654a8fe3ff5da10c3a28c8fbd5cb50384&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/241268233.jpg?k=ccd6c6fda424198e1441db41867b8bd3045a6adbb30acb2c41bca3ec5f9f65dc&o=&hp=1"
  },
   {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/205291297.jpg?k=c1efd253eab9a16bf6c326d098454f721cf87828ae3b7bb9985990380d09b655&o=&hp=1"
  },
   {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/205286423.jpg?k=be5de1a0f69885e41744979d0838f1a589f4fb709996430913b751f8400fe07b&o=&hp=1"
  },
   {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/49722210.jpg?k=e8764cd2da551c48318a222874d718d7fcde696fe258a228377e209a93f36b0d&o=&hp=1"
  },
   {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/49721910.jpg?k=ca16cf697fd8ad68641f5a52242081c7428547c495a956bda019f879749557f3&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/241266442.jpg?k=2decd121f77a70cdc9139370e988cd2612c7dde69121ee89ee18341200f029a1&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/241268592.jpg?k=baf2a46e74322ee1f9588b2d0cf99dea95470655cc53e0f8e1f8b6f06fb60a52&o=&hp=1"
  },
 ]
 const handleOpen=(i)=>{
  setSlideNumber(i);
  setOpen(true);
 }

 const handleMove=(direction)=>{
  let newSlideNumber;

  if(direction=="l"){
  newSlideNumber=slideNumber===0 ? 5 : slideNumber-1;
 } else {
  newSlideNumber=slideNumber===5 ? 0 : slideNumber+1;
setSlideNumber(newSlideNumber)
}}
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="booknow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Earl's Regent Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>40/1, Deveni Rajasinghe Mawatha, Peradeniya, Kandy, 20400 Kandy, Sri Lanka</span>
          </div>
           <span className="hotelDistance">
            Excellent location</span>
             <span className="hotelPriceHeghlight">
              Book a stay over $114 at this property and get a free taxi from hotel to Kandy town </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
          </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Pera</h1>
            <p className="hotelDesc">
              You're eligible for a Genius discount at Earl's Regent Hotel! To save at this property, all you have to do is sign in.
              Featuring an outdoor pool, in-house restaurant and relaxing spa treatments, Earl’s Regent Hotel is conveniently placed
              just 4.5 km from Kandy Railway Station. Free WiFi is available in the rooms of the property.Only 2.1 km from Kandy Royal
              Botanical Gardens, the hotel is also 5.5 km from Kandy Lake and 6 km from the ancient Temple of Tooth Relics. The Bandaranaike
              International Airport is 102 km away.Stylish rooms at Earl’s Regent Hotel feature a flat-screen TV and private balcony. 
              A minibar and seating area are included as well. The en suite bathrooms come with fluffy bathrobes and a hairdryer.Refreshing 
              workouts can be enjoyed at the fitness centre. Guests can also utilize the barbeque facilities and business centre. Other 
              facilities include a 24-hour front desk and a tour desk.A variety of local Sri Lankan, Chinese and continental dishes will be 
              served at the accommodation’s in-house restaurant. For alternative dining options, room service is available.
            </p>
          </div>
           <div className="hotelDetailsPrice">
            <h1>perfect for a 9-night stay!</h1>
            <span>Top location: Highly rated by recent guests (8.4)!</span>
           <h2>
            <b>$945</b>(9 nights)
           </h2>
           <button>Reserve or Book Now!</button>
           </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
    </div>
  )
}