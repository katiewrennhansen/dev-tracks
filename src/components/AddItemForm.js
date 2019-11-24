import React from 'react';

function AddItemForm(props) {
    return (
        <>
        <h3>Add {props.title}</h3>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">{props.title} Name</label>            
            <input type="text" name="name" id="name" placeholder="Type"></input>
            <label htmlFor="url">{props.title} URL</label>  
            <input type="text" name="url" id="url" placeholder="URL"></input>
            <button>Add {props.title}</button>
        </form>
       </>
    );
  }

export default AddItemForm;