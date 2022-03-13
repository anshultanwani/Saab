import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCountry } from '../actions'
import './add-form.scss';

const AddForm = props => {
    const [countryObj,updateCountry] = useState({
        name: '',
        continent: '',
        rank: '',
        flag: ''
    });
    const [errors,updateErrors] = useState({});
    const [imgSrc,updateFalsePath] = useState('');
    const [toastMsg,updateToast] = useState({
        show: false
    });

    const showToast = (msg) => {
        updateToast({
            show: true,
            msg
        })
        setTimeout(() => {
            updateToast({
                show: false,
                msg
            })
        },2000)
    }
    const handleChange = (value,key) => {
        let countryData = {...countryObj};
        let errorData = {...errors};
        errorData[key] = "";
        countryData[key] = value;
        updateErrors(errorData);
        updateCountry(countryData)
    };

    const validate = (value,key) => {
        switch (key) {
            case 'name': {
                if(!value){
                    return 'Please Enter mandatory Fields';
                }else if(value.length < 3 || value.length > 20){
                    return 'Name should be minimum 3 char and maximum 20';
                }
            }
            case 'rank': {
                if(!value){
                    return 'Please Enter mandatory Fields';
                }else if(value < 0){
                    return 'Rank cannot be negative';
                }
            }
            case 'flag': {
                if(!value) {
                    return 'Please upload flag image';
                }
            }
            case 'continent': {
                if(!value || value == "0"){
                    return 'Please Select Continent';
                }
            }
            default: {
                return "";
            }
        }
    }

    const onSave = () => {
        let errorObj = {};
        let errMsg = "";
        Object.keys(countryObj).map(cur => {
            errorObj[cur] = validate(countryObj[cur],cur);
            errMsg = errMsg?errMsg:errorObj[cur];
        })
        updateErrors(errorObj);
        if(errMsg){
            showToast(errMsg);
            return;
        }
        props.updateCountry(countryObj)
        props.onHidden();
    }

    const getOptionList = () => {
        let option = {};
        let optionList = [];
        props.countryData.map((cur,index) => {
            if(!option[cur.continent]){
                option[cur.continent] = true;
                optionList.push(<option value={cur.continent}>{cur.continent}</option>);
            }
    })
        return optionList;
    }

    const onFileUpload = e => {
        if(['image/png','image/jpg','image/jpeg'].includes(e.target.files[0].type) && e.target.files[0].size < 4 * 1024 * 1024){
            console.log(e.target.value)
            let countryData = {...countryObj};
            countryData['flag'] = e.target.value;
            const [file] = e.target.files
            if (file) {
                countryData['fakePath'] = URL.createObjectURL(file);
                updateFalsePath(URL.createObjectURL(file));
            }
            updateCountry(countryData);
        }else {
            showToast('Flag image should be less than 4 MB and can only be JPG & PNG')
        }
    }

    return (
        <>
            <div className='add-form'>
                <div className={'input-holder '+(errors.name?'error':'')}>
                    <label className={'label-txt '+(countryObj.name?'on-top':'')}>Country Name</label>
                    <input type="text" placeholder='Country Name' className={errors.name?'err':''} value={countryObj.name} onChange={e => handleChange(e.target.value,'name')} />
                </div>
                <div className={'input-holder '+(errors.rank?'error':'')}>
                    <label className={'label-txt '+(countryObj.rank?'on-top':'')}>Country Rank</label>
                    <input type="number" placeholder="Country Rank" className={errors.rank?'err':''} value={countryObj.rank} onChange={e => handleChange(e.target.value,'rank')}/>            </div>
                <div className={'input-holder '+(errors.continent?'error':'')}>
                    <label className={'label-txt '+(countryObj.continent && countryObj.continent != "0"?'on-top':'')}>Continent Name</label>
                    <select className='dropdown' value={countryObj.continent} onChange={(e) => handleChange(e.target.value,'continent')} style={!countryObj.continent || countryObj.continent == "0"?{color: '#718190'}:{}}>
                        <option value={0} className={'placeholder'}>Select Continent</option>
                        {getOptionList()}
                    </select>
                    {/* <input type="text" placeholder="Continent Name" className='' value={countryObj.continent} onChange={e => handleChange(e.target.value,'continent')} /> */}
                </div>
                <button className='upload-btn'>
                    Upload Flag
                    <input type="file" onChange={e => onFileUpload(e)}/>
                </button>
                {countryObj.flag?
                <img src={imgSrc} style={{width: '160px','marginBottom':'10px'}}/>
                // <div style={{color: '#0087ff',marginBottom: '10px'}}>File Uploaded</div>
                :null
                }
                <button className='btn' onClick={onSave}>Save</button>
            </div>
            <div className='toast-holder'>
                <div className={'toast-alert '+(toastMsg.show?'show':toastMsg.msg?'hide':'')}>
                    {toastMsg.msg}
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        countryData: state.countryData.countryData
    }
}

export default connect(mapStateToProps,{updateCountry})(AddForm);