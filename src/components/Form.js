import React from 'react';
import { Link } from 'react-router-dom'

function Form(props) {
    return (
        <>
        <h3>Add {props.title}</h3>
        <form>
            <label htmlFor="name">{props.title} Name</label>            
            <input type="text" name="name" id="name" placeholder="Type"></input>
            <label htmlFor="url">{props.title} URL</label>  
            <input type="text" name="url" id="url" placeholder="URL"></input>
            <Link className='save' to='/dashboard'>Add {props.title}</Link>
        </form>
       </>
    );
  }

export default Form;