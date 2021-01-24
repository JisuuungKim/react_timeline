import React from 'react';
import './Header.css';
export function Header(props){

    return <>
        <div className='title'>
        <h1>winkstagram</h1>
            <h3><a href="/">Home</a></h3>
            <h3><a href="/timeline">Timeline</a></h3>
            <h3><a href="/mypage">Mypage</a></h3>
            {props.onlogin ? (<h3 onClick={props.OFF}><a href="/" >Logout</a></h3>): (<h3><a href="/login">Login</a></h3>)}


        </div>

    </>;
}