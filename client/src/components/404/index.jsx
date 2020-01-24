import React from 'react';
import style from './notFound.module.scss';
import Button from '../misc/Elements/Button'; 

const NotFound = ({ history }) => {
  return (
    <div>
      <div className={style.wrapper}>
      <Button type="navigation" onClick={() => history.goBack()}>
        go back
      </Button>
        <h3 className={style.wrapper_heading}>Not Found</h3>
      </div>
    </div>
  );
};

export default NotFound;