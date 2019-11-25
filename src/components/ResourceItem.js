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
            const months = ['January','February','March','April', 'May','June','July','August','September', 'October','November','December'];
            let newDate = []
            let formattedDate = []
            newDate[0] = months[dateArray[1] -1]
            newDate[1] = dateArray[2]
            newDate = newDate.join(' ')
            formattedDate[0] = newDate
            formattedDate[1] = dateArray[0]
            newDate = formattedDate.join(', ')
            return newDate
        }
      }

    render() {
        const props = this.props.data
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