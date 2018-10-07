import React from "react";
import { Nav } from '../Components/Nav';
import LoginComponent from "../Components/LoginComponent";
import SearchComponent from "../Components/SearchComponent";
import LoginServiceInst   from '../Services/LoginService';
import PlanetServiceInst   from '../Services/PlanetService';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr'
class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.planetDetails = [];
    }

     /**
        login calls the authenticate action with parameters email and password
        and get the response from the server
    **/
    login = (email, password ) => {
        LoginServiceInst.login(email, password);
    }

    handleClick(event) {
        LoginServiceInst.logout();
    }

    handleChange(searchTerm) {
        PlanetServiceInst.planetByName(searchTerm);
    }

    componentWillReceiveProps() {
    }

    render() {
        return (
            <div className="app-container">
                <Nav logo={'STAR WAR'} handleClick={this.handleClick} />
                
                {this.props.error && this.props.pdata.length <=0 ?  toastr.error(this.props.error.title, this.props.error.message): null}
                {this.props.success && this.props.pdata.length <=0 ? toastr.success(this.props.success.title, this.props.success.message): null}
                {localStorage.getItem('user') === null ? <LoginComponent login={this.login} /> : <SearchComponent handleChange={this.handleChange} planetList={this.props.pdata}  /> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { data, loading, error, success } = state.LoginReducer;
    const { pdata } = state.PlanetReducer;
    return {
        data,
        pdata,
        loading,
        success,
        error
    };
}

export default connect(mapStateToProps, { })(AppContainer);