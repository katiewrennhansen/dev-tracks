import React from 'react';

function AddItemForm(props) {
    return (
        <>
        <h3>Add {props.title}</h3>
        <button onClick={props.addItem}>Add {props.title}</button>
        <form onSubmit={props.handleSubmit} className='add-item-form hidden' id={props.id}>
            <label htmlFor="name">{props.title} Name</label>            
            <input type="text" name="name" id="name" placeholder="Type"></input>
            <label htmlFor="url">{props.title} URL</label>  
            <input type="text" name="url" id="url" placeholder="URL"></input>
            {(props.type)
              ? (
                <>
                  <label htmlFor="description">{props.description} Description</label>  
                  <textarea name="description" id="description" placeholder="Describe Your Project"></textarea>
                </>
              )
              : null
            }
            <div className='submit'>
            <button>Add {props.title}</button>
            </div>
        </form>
       </>
    );
  }

export default AddItemForm;