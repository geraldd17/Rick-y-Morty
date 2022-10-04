import React from 'react'


const Location = ({ getLocation }) => {


    return (
        <article className='location' >
            <section className='location_card'>
                <h2 className='location_name'>{getLocation?.name}</h2>

                <div className="info_card">
                    <ul className='card_items'>
                        <li className='location_items'><span className='location_span'>Id</span>{getLocation?.id}</li>
                        <li className='location_items'><span className='location_span'>Type</span>{getLocation?.type}</li>
                        <li className='location_items'><span className='location_span'>Dimension</span>{getLocation?.dimension}</li>
                        <li className='location_items'><span className='location_span'>Population</span>{getLocation?.residents.length}</li>
                    </ul>
                </div>

            </section>




        </article>


    )
}

export default Location