import "./featuredProperties.css"

export default function FeaturedProperties() {
  return (
    <div className="fp">
        <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/156484014.jpg?k=972542a686a616dad8608ad3251b34f75e65122e8a08d81d2822894aad52882a&o=&hp=1" alt="" className="fpImg" />
      <span className="fpName">Oak Ray Regency</span>
     <span className="fpCity">Gatembe</span>
     <span className="fpPrice">Starting from $120</span>
     <div className="fpRating">
       <button>7.5</button> 
       <span>Good</span>
     </div>
      </div>
     <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/186072959.jpg?k=94d88c5bd50f716d57726f32b53ff34654f42b6570a09841b07927316267918c&o=&hp=1"
        alt=""
        className="fpImg"/>
     <span className="fpName">Holiday Stay Inn</span>
     <span className="fpCity">Kandy </span>
     <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
         <button>9.0</button> 
       <span>Excellent</span>
      </div>
      </div>
    
      <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/282344380.jpg?k=fa437c361bccd52fb7409aa97cc0c8e68f6cdd765f25b0c34d97d86ddfda29a5&o=&hp=1"
        alt=""
        className="fpImg"/>
     <span className="fpName">Hanthana House</span>
     <span className="fpCity">Hanthana</span>
     <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
         <button>9.2</button> 
       <span>Excellent</span>
      </div>
     </div>
      <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/72511708.jpg?k=44bbb79f6e7b643933351999674df5a635b3c27203b9e903ecfa4982eadd316d&o=&hp=1"
        alt=""
        className="fpImg"/>
     <span className="fpName">Heaven Seven Kandy</span>
     <span className="fpCity">Kandy</span>
     <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
         <button>8.4</button> 
       <span>Very good</span>
      </div>
     </div>
    </div>
  )
}
