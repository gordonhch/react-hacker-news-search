import React from 'react';
import './Titlebar.scss';



function Titlebar(props){
    return(
        <div>
            <div className="logo"><h2>H</h2></div>
            <input type="text" onChange={(event) => props.setKeyword(event.target.value)}/>
            <button onClick={(event) => props.setKeyword(event.target.value)} >search</button>
        </div>
    )
}

export default Titlebar;
