import React from 'react';
import ButtonsBlock from '../../Tools/PageTools';
import style from '../info.module.scss'; 

const View = (props) => {
  const { data: {profile: { name, description }} } = props
  return (
    <div className={style.info}>
      <ButtonsBlock
        {...props}
      />
      <h3>{name}</h3>
      <p>{description}</p>

    </div>
  );
};

export default View;