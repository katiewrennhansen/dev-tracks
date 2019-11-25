import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ResourceItem extends Component {
    
    renderClass(css){
        if(css === 'Completed'){
            return 'completed'
        }
        if(css === 'To Do'){
            return 'todo'
        }
        if(css === 'In Progress'){
            return 'inprogress'
        }
    }

    parseDate(date){
        if(date !== null){
            const shortDate = date.split('T')[0]
            const dateArray = shortDate.split('-')
            let newDate = []
            newDate[0] = dateArray[1]
            newDate[1] = dateArray[2]
            newDate[2] = dateArray[0]
            const formattedDate = newDate.join('-')
            return formattedDate
        } 
    }

    render() {
        const props = this.props.data
        this.parseDate(props.date_completed)
        return (
            <Link key={props.id} to={`/dashboard/${props.id}`}>
                <li className='resource'>
                    <h2>{props.name}</h2>
                    <p>{props.type}</p>
                    <p className={`status ${this.renderClass(props.status)}`}>{props.status}</p>
                    <p className='date-completed'>{this.parseDate(props.date_completed)}</p>
                    <div className='hidden-content'>
                        <p className='description'>{props.description}</p>
                    </div>
                </li>
        </Link>
        )
    }
}

export default ResourceItem;