import React from "react";
import { PlanetList } from './PlanetList';
import { debounce } from 'lodash';
import moment from 'moment';
let startTime = '';
let counter = 0;
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
         let value = event.target.value;
    //     if(startTime == "") {
    //         startTime = new Date();
    //     }
    //     if(localStorage.getItem('user') != "Luke Starwalker") {
    //         if(startTime.getSeconds() >= 60) {
    //             counter = 0;
    //             this.limitmsg = ''; 
    //             startTime = "";
    //         }
    //         if(counter <= 15) {
    //            const debounceCall = debounce(() => {
    //                 this.props.handleChange(value);
    //                 counter ++;
    //             } , 500);
    //             debounceCall();
    //         }else {
    //             this.limitmsg = "Limit exaust per minute planet search";
    //             console.log(counter);
    //             console.log("seconds",startTime.getSeconds());
    //         }
             
    //     } else {const debounceCall = debounce(() => {
    //         this.props.handleChange(value);
            
    //     } , 500);
    //     debounceCall();
    //   }

        const debounceCall = debounce(() => {
            this.props.handleChange(value);
            
        } , 500);
        debounceCall();
        
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
