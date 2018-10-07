import React from 'react';
export const  Nav = (props) => (
           <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{props.logo}</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                { localStorage.getItem('user') === null ?
                null
                :
                    <li className="nav-item active">
                        <a className="nav-link" onClick={props.handleClick} href="#">{localStorage.getItem('user')} | Logout</a>
                    </li>
                }
                </ul>
            </div>
            </nav>
)