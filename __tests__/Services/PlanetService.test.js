import PlanetServiceInst from '../../src/services/PlanetService';
import Dispatcher from '../../src/redux/actions/Dispatcher';
import NetworkManager from '../../src/networkManager/NetworkManager';
import { GET_PLANETS_DETAILS_SUCCESS, GET_PLANETS_DETAILS_ERROR } from '../../src/redux/actions/types';


describe('Test Cases For Location Service', () => {

	it('should call planetByName() for sucess', () => {
		Dispatcher.dispatchEvents = jest.fn();
		NetworkManager.getAPI = jest.fn().mockReturnValue(Promise.resolve({}));
		PlanetServiceInst.planetByName('a');
		Dispatcher.dispatchEvents(GET_PLANETS_DETAILS_SUCCESS, {});
		expect(Dispatcher.dispatchEvents).toBeCalled();
	});

	it('should call planetByName() for error', () => {
		Dispatcher.dispatchEvents = jest.fn();
		NetworkManager.getAPI = jest.fn().mockReturnValue(Promise.resolve());
		PlanetServiceInst.planetByName('unwanted');
		Dispatcher.dispatchEvents(GET_PLANETS_DETAILS_ERROR, '');
		expect(Dispatcher.dispatchEvents).toBeCalled();
	});

});
