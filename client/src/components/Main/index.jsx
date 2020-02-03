import React from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.scss';
import Button from '../misc/Elements/Button';
import {FORM_INSTANCE} from '../../configs';

const Main = (props) => {
  const {
    data: { profile },
    loaders: { profileLoading },
    methods: { removeProfileHandler }
  } = props

  const renderProfile = () => {
    if (!profileLoading) {
      if (profile._id && !profile.removed) {
        return <Link to={profile._id}> go to profile</Link>
      }
      if (profile._id && profile.removed) {
        return <div>
          <Button type="add" payload={{instance: FORM_INSTANCE.profile}}>Create Profile </Button>
          <Button onClick={() =>removeProfileHandler({id: profile._id})}>Restore Profile </Button>
        </div>
      }

      return <Button type="add">Create Profile </Button>
    }
    return <div>profile loading...</div>
  }


  return (
    <div className={style.main__wrapper}>
      {renderProfile()}
    </div>
  );
};

export default Main;