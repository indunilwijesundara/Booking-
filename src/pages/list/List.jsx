import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import{format} from "date-fns"
import { DateRange } from "react-date-range";
import Searchitem from "../../components/searchitem/Searchitem";


export default function List() {
  const location=useLocation();
  const [destination,setDestination] = useState(location.state.destination)
   const [date,setDate] = useState(location.state.date)
    const [openDate,setOpenDate]= useState(false) 
   const [options,setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="LsTitle">Search</h1>
            <div className="LsItem">
              <lable>Destination</lable>
              <input placeholder="destination" type="text"></input>
            </div>
             <div className="LsItem">
              <lable>Check-in Date</lable>
             <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy"
             )}`}</span>
             {openDate && (
             <DateRange 
              onChange={(item)=> setDate([item.selection])} 
              minDate={new Date()} 
              ranges={date}
             />
             )}
            </div>
            <div className="LsItem">
              <lable>Options</lable>
              <div className="LsOptions">

              <div className="LsOptionItem">
              <span className="LsOptionText">
                Min price <small>Per night</small>
              </span>
              <input type="number" className="LsOptionInput"/>
              </div>
               <div className="LsOptionItem">
              <span className="LsOptionText">
                Max price <small>Per night</small>
              </span>
              <input type="number" className="LsOptionInput"/>
              </div>
               <div className="LsOptionItem">
              <span className="LsOptionText">
                Adult 
              </span>
              <input type="number" min={1} className="LsOptionInput"placeholder={options.adult}/>
              </div>
               <div className="LsOptionItem">
              <span className="LsOptionText">
                Children
              </span>
              <input type="number" min={0} className="LsOptionInput" placeholder={options.children}/>
              </div>
               <div className="LsOptionItem">
              <span className="LsOptionText">
                Room 
              </span>
              <input type="number" min={1} className="LsOptionInput" placeholder={options.room}/>
              </div>
                </div>
            </div>
            <button>Search</button>
          </div>
          <div className="ListResult">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  )
}
