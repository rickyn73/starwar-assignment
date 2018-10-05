import React from "react";
import LoginComponent from "../Components/LoginComponent";
import { SearchComponent } from "../Components/SearchComponent";

export default class SearchContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-container">
                <LoginComponent />
                <SearchComponent  />
            </div>
        )
    }
}