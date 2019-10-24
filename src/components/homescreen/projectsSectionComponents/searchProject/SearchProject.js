import React, { Component } from 'react';
import icon from '../../../../img/search-icon.svg';

class SearchProject extends Component {

    render() {
        return (
            <form className='search-project'>
                <input 
                    placeholder=' Project Name'>                    
                </input>
                <button type='submit'><img src={icon} alt='search icon' className='search-icon' /></button>
            </form>
        )
    }
}


export default SearchProject;