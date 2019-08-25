import React from 'react';
import '../css/home.css';

const Home = ( { user, signOutUser }) => {

    //modify this to account for names made of 2+ words as well
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div>
            <header>
                <p className='signOut' onClick={signOutUser}>Sign Out</p>
                <h1>Welcome back {capitalize(user.name)}</h1>
                <p>[placeholder for cute motivational quote]</p>
            </header>

        </div>
    )
}

export default Home;