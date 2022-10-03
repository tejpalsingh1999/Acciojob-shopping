import React from 'react';
import './Main.css'
import main from '../../Icons/main.png'
import {

    Link
} from "react-router-dom";

const Main = () => {
    return (
        <div className=''>
            <div className="main__container">
                <div>
                    <h3 className='heading__secondary'>SUMMER 2020</h3>
                    <h1 className='heading__primary'>NEW COLLECTION</h1>
                    <h3 className='heading__para'>We know how large objects will act, <br></br>but things on a small scale.</h3>
                    <button className='btn-primary' ><Link to="/shop">Shop Now</Link> </button>
                </div>
                <div className='circle'></div>
                <img src={main} alt="main" className='main__img' />
            </div>
        </div>
    );
}

export default Main;
