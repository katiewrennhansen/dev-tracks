import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ResourceItem extends Component {
    render() {
        const props = this.props.data
        return (
            <Link key={props.id} to={`/dashboard/${props.id}`}>
                <li className='resource'>
                    <h2>{props.name}</h2>
                    <p>{props.type}</p>
                    <p className={`status completed`}>{props.status}</p>
                    <p className='date-completed'>{props.date_completed}</p>
                    <div className='hidden-content'>
                        <p className='description'>{props.description}</p>
                    </div>
                </li>
        </Link>
        )
    }
}

export default ResourceItem;