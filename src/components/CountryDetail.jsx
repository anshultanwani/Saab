import React from 'react';
import './country-detail.scss';

const CountryDetail = props => {
    const {
        selectedCountry
    } = props;
    return (
        <div className='selected-country'>
            <div className='heading'>Selected Country Details: </div>
            <div className='detail-holder'>
                <img src={selectedCountry.flag.indexOf('fakepath') == -1?require('../assets/'+selectedCountry.flag).default:selectedCountry.fakePath} />
                <div className='name-detail'>
                    <span className='title'>Name :  </span>
                    <div className='name'>
                        {selectedCountry.name}
                    </div>
                    <span className='title'>Continent :  </span>
                    <div className='continent'>
                        {selectedCountry.continent}
                    </div>
                    <span className='title'>Rank :  </span>
                    <div className='name'>
                        {selectedCountry.rank}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CountryDetail;