import React from "react";
import { PlanetList } from './PlanetList';
export default class SearchComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    handleChange(event) {
        this.props.handleChange(event.target.value);
    }


    planetList() {
        let counter = 900;
        let Planet  = this.props.planetList.map((planet, index) => {
            if(planet.population != 'unknown') {
                counter = counter - index*10;
                return <PlanetList key={index} styleDetails={{width: counter, border: '1px solid black'}} planet={planet} />
            }
        })
        return Planet;
    }

    unknownPlanet() {
        return this.props.planetList.map((planet, index) => {
            if(planet.population === 'unknown') {
                return <PlanetList key={index} styleDetails={{border:'1px solid black'}} planet={planet} />
            }
        })
    }

    render() {
        const unknownPopulation = this.unknownPlanet(this.props.planetList);
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-black rounded box-shadow">
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" placeholder="Search planet" />
                </div>
                <div className='planet-list-wrapper'>
                    {this.planetList() != "" ? <div><div className="unknown-style"><hr /> POPULATION IN DESCENDING <hr /></div><div>{this.planetList()}</div></div> :null }
                    {unknownPopulation != "" ? <div className="unknown-style"><hr /> UNKNOWN POPULATION <hr /></div> :null }
                    {unknownPopulation}
                </div>
                </main>
        )
    }
}
