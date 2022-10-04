import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Residents = ({ url }) => {
    const [residentsCard, setResidentsCard] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResidentsCard(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <article className='card_residents'>
            <div className="card_header">
                <img className='card_image' src={residentsCard?.image} alt="" />
                <div className="card_container">
                    <div className={`card_circle ${residentsCard?.status}`}></div>
                    <span className='card_status'>{residentsCard?.status}</span>
                </div>

            </div>
            <div className="card_body">
                <h3 className='card_name'>{residentsCard?.name}</h3>
                <ul className='card_list'>
                    <li className='card_item'><span className='card_span'>Species:</span>{residentsCard?.species}</li>
                    <li className='card_item'><span className='card_span'>Origin:</span>{residentsCard?.origin.name}</li>
                    <li className='card_item'><span className='card_span'>Episode where appear:</span>{residentsCard?.episode.length}</li>
                </ul>


            </div>


        </article>
    )
}

export default Residents