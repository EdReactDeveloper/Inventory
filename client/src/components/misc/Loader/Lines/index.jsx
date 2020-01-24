import React from 'react';
import style from './Lines.module.scss';

const Loader = ({className}) => <div className={`${className} ${style.loader}`}>loading ...</div>;

export default Loader;
