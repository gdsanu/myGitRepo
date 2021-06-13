import React from 'react'
import './TeamTile.css'
import { Link } from 'react-router-dom';

const TeamTitle = ({ teamName }) => {
    return (
        <div className="TeamTitle">
            <h1>
                <Link to={`/teams/${teamName}`}>{teamName}</Link>  
            </h1>
            
        </div>
    )
}

export default TeamTitle
