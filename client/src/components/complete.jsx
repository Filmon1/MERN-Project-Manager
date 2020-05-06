import React, {useState} from 'react';
import {Router, Link, navigate} from '@reach/router';
import axios from 'axios';


const Complete = props => {
    const {projectId} = props;
    const [Status, setStatus] = useState("3")

    const statusUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/projects/` + projectId , {
            Status
        })
            .then(res => {
                console.log(res.data);
                props.Update();
            })
            .catch(err => console.log(err) );
        }
        return (
            <button style ={{marginLeft: "200px"}} className="button is-primary is outlined" 
            type="submit" onClick = {statusUpdate}> Move to Complete </button> 
        )
}



export default Complete;
