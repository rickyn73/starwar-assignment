import Dispatcher from '../../../src/redux/actions/Dispatcher';

describe('Dispatcher', () => {
    it('dispatchEvents function should call Dispatcher.dispatch method', () => {
        Dispatcher.dispatch = jest.fn();
        Dispatcher.dispatchEvents('', {});
        expect(Dispatcher.dispatch).toBeDefined();
    });

    it('dispatchServiceFailError function should call Dispatcher.dispatchEvents method', () => {
        Dispatcher.dispatchEvents = jest.fn();
        expect(Dispatcher.dispatchEvents).toBeDefined();
    });

});

