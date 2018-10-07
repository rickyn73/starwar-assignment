import React from 'react';
export const PlanetList = (props) => (
  <div style={props.styleDetails} className="my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">Planet Name - {props.planet.name}</h6>
    <h6 className="border-bottom border-gray pb-2 mb-0">Population - {props.planet.population}</h6>
    <div className="media text-muted pt-3">
      <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded" />
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">Diameter - {props.planet.diameter}</strong>
        </div>
        <span className="d-block"></span>
      </div>
    </div>
  </div>
)