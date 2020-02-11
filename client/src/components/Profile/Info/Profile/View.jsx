import React from 'react';
import ButtonsBlock from '../../Tools/PageTools';

const View = (props) => {
  const { data: {profile: { name, description }} } = props
  return (
    <div>
      <ButtonsBlock
        {...props}
      />
      <h3>{name}</h3>
      <p>{description}</p>

    </div>
  );
};

export default View;