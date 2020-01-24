import React from 'react';
import Authorized from './Authorized';
import UnAuthorized from './UnAuthorized'; 

const Auth = ({isLoggedIn, logout}) => isLoggedIn ? <Authorized logout={logout}/> : <UnAuthorized />

export default Auth;