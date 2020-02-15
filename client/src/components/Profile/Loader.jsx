import React from 'react';
import style from './profile.module.scss'; 
import Loader from '../misc/Loader/Circle'; 

const ProfileLoader = () => {
  return (
    <div className={style.loader__wrapper}>
      <Loader className={style.loader} />
    </div>
  );
};

export default ProfileLoader;