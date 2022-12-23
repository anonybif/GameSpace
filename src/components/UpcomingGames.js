import React from "react";
import './UpcomingGames.css';
import { upcomingGames } from '../data/upcomingGames_data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function UpcomingGames() {

    return (
        <div className="upcomingGames">
            <div className="title-container">
                <h2>Top Upcoming Games</h2>
                <select name="platforms" id="platforms">
                    <option value="Overall">Overall</option>
                    <option value="XboxOne">Xbox One</option>
                    <option value="Ps4">Ps4</option>
                    <option value="Switch">Switch</option>
                    <option value="Pc">Pc</option>
                </select>
            </div>
            <div className='games-container'>
                {upcomingGames.slice(0, 6).map((card, index) => (
                    <div key={index} className='upcomingGame'>
                        <p className="title">{index + 1}{"."} {card.title}</p>
                        <p className="releaseDate"><FontAwesomeIcon icon={faCalendarDays} /> {card.releaseDate}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default UpcomingGames;