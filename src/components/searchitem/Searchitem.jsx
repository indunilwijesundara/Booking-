import { Link, useNavigate } from "react-router-dom";
import "./searchitem.css"

export default function Searchitem() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/156484014.jpg?k=972542a686a616dad8608ad3251b34f75e65122e8a08d81d2822894aad52882a&o=&hp=1" 
        alt="" 
        className="siImg" 
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiop">Free airport taxi</span>
          <span className="siSubtitle">Studio Apartment with Air conditioning</span>
          <span className="siFeatures">Entire studio. 1 bathroom .21m2 1 full bed</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">You can later,so lock in this great price today!</span>
            
            </div>
            <div className="siDetails">
              <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
              </div>
              <div className="siDetailTexts"> 
              <span className="siPrice">$123</span>
              <span className="siTaxop">Includes taxes and fees</span>
               <Link to="http://localhost:3000/hotels/hotel">
        <button className="siCheckButton">See availability</button>
      </Link>
              
              </div>

            
        </div>
    </div>
  )
}
