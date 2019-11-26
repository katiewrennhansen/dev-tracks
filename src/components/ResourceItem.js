import React from 'react';
import { Link } from 'react-router-dom'
import FunctionService from '../services/function-service'

function ResourceItem(props) {
    return (
        <Link to={`/dashboard/${props.data.id}`}>
            <li className="resource">
                <h2>{props.data.name}</h2>
                <p>{props.data.type}</p>
                <p className={`status ${FunctionService.renderClass(props.data.status)}`}>{props.data.status}</p>
                <p className="date-completed">{FunctionService.parseDate(props.data.date_completed)}</p>
                <div className="hidden-content">
                    <p className="description">{props.data.description}</p>
                </div>
            </li>
        </Link>
    )
}

export default ResourceItem;