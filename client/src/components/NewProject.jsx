import React, {useState} from 'react';
import {Router, Link, navigate} from '@reach/router';
import axios from 'axios';
import moment from 'moment';




const NewProject = props => {

const [project, setProject] = useState("");
const [date, setDate] = useState("");
const [Status, setStatus] = useState("1");
const [errors, setErrors] = useState({});


const addProjects = e => {
    e.preventDefault();
    const projects = {project, date, Status:"1"}
    axios.post("http://localhost:8000/api/projects/new", 
    projects,
    date,
    Status,)
        .then(res => {
            if(res.data.errors) {
                setErrors(res.data.errors);

            }else{
                navigate("/")
            }
        })
        .catch(err => console.log(err) );
    }

    return (
        <form onSubmit={ addProjects }>
            <h1 style ={{fontSize: "40px", marginLeft: "200px"}}>Plan a new project</h1>
            <Link style ={{float: "right"}}to ="/"> Back to Dashboard</Link>
            <div className="field">
                <div className="control">
                    <input  style ={{width: "50%" , marginLeft: "200px"}} className="input is-primary" type="text" placeholder="project" onChange = {e => setProject(e.target.value)} value ={project} />
                    {project.length < 3 ? <p style ={{width: "50%" , marginLeft: "200px"}} >project  must be at least 3 letters</p> : "" }
                { 
                    errors.project ?
                    <p style ={{width: "50%" , marginLeft: "200px"}}>{errors.project.message}</p> :
                    ""
                }
                </div>
            </div>   
            <div className="field">
                <div className="control">
                <input style ={{width: "50%" , marginLeft: "200px"}} className="input is-primary" type="date" onChange = {e => setDate(e.target.value)} value={date} />
                {date.length < 1 ? <p style ={{width: "50%" , marginLeft: "200px"}} >You must put date</p> : "" }
                { 
                    errors.date ?
                    <p style ={{width: "50%" , marginLeft: "200px"}}>{errors.date.message}</p> :
                    ""
                }
        </div>      
    </div>  
            <button  style ={{marginLeft: "200px"}} className="button is-primary is outlined" type="submit" to ="/">  Plan a project </button>
        </form>
    )
}


export default NewProject; 