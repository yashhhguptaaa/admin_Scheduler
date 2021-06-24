import React , {useState} from 'react'
import './style.css';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const AddInformation = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location);
    const [author, setAuthor] = useState('Mrs. Yoshi Tyagi');
  
    const [date ,setDate ] = useState(location?.state?.date || 1 );
    const [startAt,setStartAt] = useState();
    const [endAt , setEndAt] = useState();
    const [task,setTask] = useState();


    const  handleSubmit = async (e) =>{
        e.preventDefault();

           if(startAt < endAt){
            const res =await Axios.post("http://localhost:8000/admin/check", {name: author, Date: date}, {config : {
                headers: {
                  "Content-Type": "application/json"
                }
              }})
            const checks = res.data;

            if(checks != null){
                await checks.forEach((check) => {
                    if((startAt > check.start_at && startAt < check.end_at) || (endAt < check.end_at && endAt > check.start_at)){
                        return alert(`${author} 's task is already booked between ${check.start_at} and ${check.end_at}`)
                    }
                });
            }
            

            await Axios.post("http://localhost:8000/admin/", {
                name: author,
                Date: date,
                start_at: startAt,
                end_at: endAt,
                task: task,
                })

        }

        history.push('/')

};

    return (
        <div  className="modal">
            <form className="modal-content" onSubmit={handleSubmit} >
                <div className="container">
                    <h1>Add Information</h1>
                    
                    <div className="name_last_user">
                        <div className="name">
                        <label for="name"><b>Teacher's name</b></label><br/>
                        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                            <option value="Mrs. Puja Lamba">Mrs. Puja Lamba</option>
                            <option value="Mrs. Yoshi Tyagi">Mrs. Yoshi Tyagi</option>
                            <option value="Mr Rakesh Kumar">Mr Rakesh Kumar</option>
                            <option value="Mr R.k Goyal">Mr R.k Goyali</option>
                            <option value="Mrs. Yoshi Naka">Mrs. Yoshi Naka</option>
                        </select>
                        </div>
                        
                        <label>Date</label>
                        <textarea required  value={date} onChange={(e) => setDate(e.target.value)} ></textarea>
                    </div>

                    <div className="name_last_user">
                        <label>From (Time)</label>
                        <input type="text" value={startAt} onChange={(e) => setStartAt(e.target.value)} placeholder="Enter Start Time" name="task" required /><br/>
                        
                        <label>To (Time)</label>
                        <input type="text" value={endAt} onChange={(e) => setEndAt(e.target.value)} placeholder="Enter End Time" name="task" required /><br/>
                    </div>

                    

                    <label for="Task"><b>Task</b></label><br/>
                    <input type="text" placeholder="Enter teacher's task" name="task" value={task} onChange={(e) => setTask(e.target.value)} required /><br/>

                    
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Submit</button>
                    </div>
                </div>    
            </form>
       
        </div>

    )
}

export default AddInformation;