import React, {useState} from 'react';
import {Router, Link, navigate} from '@reach/router';
import axios from 'axios';




const Delete = props => {
    const {projectId} = props;
    

    const statusUpdate = e => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/projects/` + projectId , {
            
        })
            .then(res => {
                console.log(res.data);
                props.Update()
            })
            
            .catch(err => console.log(err) );
        }

        return (

        <button style ={{marginLeft: "200px"}} className="button is-danger is outlined" 
        type="submit" onClick = {statusUpdate}> Remove project </button> 

        )
}



export default Delete;