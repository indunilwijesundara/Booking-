import React from 'react'
import "./featured.css"

export default function Featured() {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img  src="https://pix8.agoda.net/hotelImages/66613/-1/4cfe6237c894b09ce16ba1c640d0b0b6.jpg?ca=16&ce=1&s=1024x768" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Kandy</h1>
             <h2>25 properties</h2>
        </div>
    </div>
     <div className="featuredItem">
        <img  src="https://www.greatgardensoftheworld.com/wp-content/uploads/2020/01/GALLERY_RBG-5.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Peradeniya</h1>
             <h2>15 properties</h2>
        </div>
    </div>
     <div className="featuredItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVnjxbR3JniiRVn0Nyibn_2mK9NKwP_dR2A&usqp=CAU" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Hanthana</h1>
             <h2>10 properties</h2>
        </div>
    </div>
    </div>
  )
}
