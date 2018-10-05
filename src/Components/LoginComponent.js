import React, { Component } from 'react';
import LoginModal from './LoginModal';
export const LoginComponent = ({ headingMsg, infoMsg }) => {
    return (
        <div className="col-md-12 col-lg-12 login-wraper">
            <LoginModal />
        </div>
    )
}  