import React from 'react';
import style from './Circle.module.scss' 

const Loader = ({className}) => <div className={`${className} ${style.loader}`}>Loading...</div>

export default Loader;