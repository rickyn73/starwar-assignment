import React from "react";

class SearchComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    onClickHandle() {
        LocationServiceInst.getLocationGata();
    }

    render() {
        return (
            <div className="row location-container">
                <div className="col-md-6 col-lg-4 padding-0" >
                    <div class="input-group">
                        <button class="form-control" onClick={() => this.onDropDownClick()}>
                            <span className="placeholder-text">
                                Select your location
                            </span>                            
                            <i class={this.getArrowIcon()}></i>
                        </button>
                    </div>

                </div>

                <div className="col-md-1 col-lg-1">
                    <button
                        onClick={() => this.onClickHandle()}
                        type="submit"
                        className="btn btn-default go-btn"
                    >
                        Go
                    </button>
                </div>

                <div className="col-md-5 col-lg-7">

                </div>
            </div>
        )
    }
}

function mapStateToProps({ LocationReducer }) {
    const { data } = LocationReducer
    return {
        data
    }
}



export default connect(mapStateToProps, { getLocationList })(LocationComponent);