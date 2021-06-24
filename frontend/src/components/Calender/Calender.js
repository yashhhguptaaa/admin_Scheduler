import React ,{useState,useEffect} from 'react'
import './style.css';
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Calender() {

const history = useHistory();
const  days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const [scheduleList, setScheduleList] = useState([]);

 useEffect( () => {
       Axios.get("http://localhost:8000/admin/").then((response) => {
            setScheduleList(response.data);
            console.log(response.data);
        });
        
 }, []);

  
  const checkDateExist=(scheduleList,date)=>{
    for(let i=0;i<scheduleList.length;++i){
        if(scheduleList[i].Date===date){
            return i
        }
    }
    return -1;
  }

    return (
        <div className='calender'>
            <div className='calender-title'>
                Admin's Scheduler
            </div>   
            <div className="week-name">
                    { days.map( (day,index) => (
                        <div key={index} className="day-name">{day}</div>
                    ))}
            </div>  
            <div className="dates">
                   
                    {
                        dates.map((date,index) =>{
                            // return <div key={index} className="date">{schedule.name}{1}</div>
                            const i=checkDateExist(scheduleList,date)
                            if(i!==-1)
                            return <div key={index}   onClick={() =>{  history.push({pathname:"/add",state:{date:date}})   }} className="date">{date} <br /> {scheduleList[i].name}<br/>{scheduleList[i].start_at}-{scheduleList[i].end_at} </div>

                            else
                            return <div className="date" onClick={() =>{  history.push({pathname:"/add",state:{date:date}})   }}>{date}</div> 

                        }
                            )
                    }
                     <i class="material-icons" onClick={ () => history.push('/add')} style={{backgroundColor:'green', positon:'relative', marginLeft:'90%', fontSize:'60px',color:'black',borderRadius:'10px',cursor:'pointer'}}>add</i>   
            </div>   
        </div>
    )
}

export default Calender;
