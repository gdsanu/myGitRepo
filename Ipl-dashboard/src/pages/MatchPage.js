import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MatchDetailsCard from '../components/MatchDetailsCard';
import YearSelector from '../components/YearSelector';
import './MatchPage.css';

const MatchPage = () => {
const { teamName, year } = useParams();
const [matches, setMatches] = useState([]);
useEffect(
        ()=>{

            const fetchMathes = async()=>{
                const response = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data)                
            };

            fetchMathes();
        }, [teamName, year]);

    return (
        <div className="MatchPage">   
            <div className="year-selector">
                <h4>Select Year</h4>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailsCard key={match.id} teamName={teamName} match={match} />)
                }
            </div>
            
        </div>
    )
}

export default MatchPage;