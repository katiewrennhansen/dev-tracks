import React from "react";
import { Link } from 'react-router-dom'
import './Accordion.css';


function Accordion(props) {
 return (
   <div className="accordion-section">
     <button className="accordion">
        <h2>{props.name}</h2>
        <p>{props.type}</p>
        <p className={`status ${props.class}`}>{props.status}</p>
        <p>{props.date_completed}</p>
     </button>
     <div className="accordion-content">
        <p>{props.description}</p>
        <div className='actions'>
            <Link className='edit' to='/edit-resource'>Edit</Link>
            <button>Delete</button>
        </div>
     </div>
   </div>
 );
}

export default Accordion;