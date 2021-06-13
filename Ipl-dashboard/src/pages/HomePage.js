import React, { useEffect, useState } from 'react';
import TeamTitle from './TeamTitle';
import './HomePage.css';

const HomePage = () => {
    const [teams, setTeams] = useState([]);
    useEffect(
        ()=>{

            const fetchAllTeams = async()=>{
                const response = await fetch(`http://localhost:8081/team`);
                const data = await response.json();
                setTeams(data)                
            };

            fetchAllTeams();
        }, []);

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">Saanu's IPL Dashboard</h1> 
            </div>
            <div className="team-grid">
                {teams.map(team => <TeamTitle key={team.id} teamName={ team.teamName}/>)}
                
           </div>
        </div>
    )
}

export default HomePage;