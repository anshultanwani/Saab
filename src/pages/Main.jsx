import React, { useState } from 'react';
import { connect } from 'react-redux';
import CountryDetail from '../components/CountryDetail';
import AddForm from '../components/AddForm';
import './main.scss';

const Main = props => {
    const [selectedCountry, updateCountry] = useState({});
    const [showAddForm,toggleAddForm] = useState(false);
    const onSelectCountry = (e) => {
        if(e.target.value != selectedCountry.index){
            let country = {...props.countryData[e.target.value - 1],index: Number(e.target.value)}
            updateCountry(country)
        }
    }
    return (
        <div className='main-container'>
            <div className='content'>
                <select className='dropdown' placeholder='Select Country' onChange={onSelectCountry} value={selectedCountry.index}>
                    <option value={0} className='placeholder'>Select Country</option>
                    {
                        props.countryData.map((cur,index) => {
                            return (
                                <option value={index + 1}>{cur.name}</option>
                            )
                        })
                    }
                </select>
                <button className={'add-btn '+(showAddForm?'cancel':'')} onClick={() => toggleAddForm(!showAddForm?true:false)}>{showAddForm?'Cancel':'Add'}</button>
                {selectedCountry.index && !showAddForm?
                    <CountryDetail selectedCountry={selectedCountry} />
                :null}
                {showAddForm?
                    <AddForm onHidden={() => {toggleAddForm(false);updateCountry({index: 0})}}/>
                :null}
            </div>
        </div>
    )
};

const mapStateToProps = (state)  => {
    return {
        countryData: state.countryData.countryData
    }
}
export default connect(mapStateToProps)(Main);