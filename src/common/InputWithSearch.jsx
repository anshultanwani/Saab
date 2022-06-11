import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './autosuggest.scss';
import {ReactComponent as Cross} from '../assets/images/smallcross.svg';

const REGION = [
    { name: 'Panjabi'},
    { name: 'Sindhi' },
    { name: 'Gujrati' },
    { name: 'South Indian' },
    { name: 'North Indian' },
    { name: 'Panjabi New' },
    {  name: 'Marwadi' },
    {  name: 'Bengali' },
    {  name: 'Bolo' },
];

// to be removed after api integration
// use UseEffect or handleChange for api call

const InputWithSearch = props => {
    const [selected,updateSelection] = useState(props.selected || []);
    const [autoSuggest,updateSuggestion] = useState([]);
    const [searchKey,updateSearch] = useState('');
    

    const handleChange = value => {
        let results = [];
        if (value && value.length > 1) {
            results = REGION.filter((user) => {
                return user.name.toLowerCase().startsWith(value.toLowerCase());
            });
        }
        updateSuggestion(results);
        updateSearch(value);
    }
    const addRemoveTab = (val,remove = false,index) => {
        let data = [...selected];
        if(remove) {
            data.splice(index,1);
        }else {
            data.push(val);
            handleChange('')
        }
        updateSelection(data);
        props.updateList(data);
    }
    return (
        <>  
            <div className='suggestion-inp'>
                <TextField
                    type="search"
                    value={searchKey}
                    onChange={e => handleChange(e.target.value)}
                    className="input-search"
                    placeholder="Search here..."
                    sx={{ width: 1 }}
                />
                {autoSuggest.length ? 
                    <div className='auto-suggest'>
                        {autoSuggest.map((cur,index) => {
                            return (
                                <div className='option' onClick={() => {addRemoveTab(cur.name)}} key={index}>{cur.name}</div>
                            )  
                        })}
                    </div>
                :null}
                {selected.length ? 
                    <div className='tag-holder'>
                        {selected.map((cur,index) => {
                            return (
                                <div className='tags' key={index}>
                                    {cur}
                                    <Cross className='cross-icon' onClick={() => addRemoveTab(cur,true,index)} />    
                                </div>
                            )
                        })}
                    </div>
                :null}
            </div>
        </>
    )
};

export default InputWithSearch;