import React, {useState, useEffect} from 'react';
import {Router, Link} from '@reach/router';
import axios from 'axios';
import moment from 'moment';
import InProgress from '../components/InProgress';
import Complete from '../components/complete';
import Delete from './remove';


const Status = props => {
    const [projects, setProjects] = useState([]);

    const displayProjects = () => {
        axios.get("http://localhost:8000/api/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }
    useEffect( () => {
        displayProjects();

    }, []);

    function pastDueDate(date) {
        return new Date(date) < new Date(new Date().toDateString())
    }



    return (
    <div className="Wrapper is-desktop">
        <div className="columns is-gapless ">
            <div className = "column is-three-quarters-mobile "> 
                <article className="message is-success">
                    <div className="message-header">
                        <p>Backlog</p>
        </div>
        {projects.filter(pro => pro.Status === "1").map(pro => 
        <div className="message-body"  key={pro._id}>
                <h5>{pro.project}</h5>
                <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
                <InProgress 
                projectId = {pro._id}
                Update = {displayProjects}
                />
            </div> 
        )}
        </article>
    </div>
    <div className = "column  is-three-quarters-mobile "> 
        <article className="message is-info">
            <div className="message-header">
                <p>In progress</p>
        </div>
            {projects.filter(pro => pro.Status === "2").map(pro => 
            <div className="message-body"  key={pro._id}>
                <h5>{pro.project}</h5>
            { pastDueDate(pro.date) ? 
            <p style ={{color: "red" }}>Due:  {moment(pro.date).format('MM-DD-YYYY')}</p> :
            <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
            }
            
            <Complete 
            projectId = {pro._id}
            Update = {displayProjects}
            />
        </div> 
        )}
        </article>
    </div>
    <div className = "column is-three-quarters-mobile ">
        <article className="message is-warning">
            <div className="message-header">
                <p>Completed</p>
        </div>
            {projects.filter(pro => pro.Status === "3").map(pro => 
            <div className="message-body"  key={pro._id}>
            <h5>{pro.project}</h5>
            <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
                <Delete 
                projectId = {pro._id}
                Update = {displayProjects}
                />

        </div> 
        )}
        </article>
    </div>
    </div>
        <button className="button is-primary"> <Link to ="/projects/new"> Add New Projects</Link></button>
    </div>
    )
}

export default Status;