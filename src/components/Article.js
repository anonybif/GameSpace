import React from "react";
import './Article.css';
import { blogs } from "../data/blog_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

function Article() {

    return (
        <div className="articles">
            <h2>Blogs</h2>
            <div className='articles-container'>
                {blogs.slice(0, 3).map((card, index) => (
                    <div key={index} className='article'>
                        <img alt={card.title} src={card.linkImg} className='article-img' />
                        <div className="article-text">
                            <p className="title">{card.title}</p>
                            <div className="details">
                                <p className="date"><FontAwesomeIcon icon={faCalendarDays} /> {card.date}</p>
                                <p className="comments"><FontAwesomeIcon icon={faComment} /> {card.comments}</p>
                                <p className="likes"> <FontAwesomeIcon icon={faHeart} /> {card.likes}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Article;