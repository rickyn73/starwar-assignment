import MockAdapter from 'axios-mock-adapter';
import NetworkProvider from '../../src/NetworkManager/NetworkProvider';
import NetworkManager from '../../src/NetworkManager/NetworkManager';

let mockAxios;
beforeEach(() => {
    mockAxios = new MockAdapter(NetworkProvider);
});

describe('NetworkManager', () => {

    test('should be an Object', () => {
        expect(typeof NetworkManager).toBe('object');
    });
});

describe('Class NetworkManager GET', () => {

    it('should be a function', () => {
        expect(typeof NetworkManager.getAPI).toBe('function');
    });

    it('should return data from mock response', () => {
        mockAxios.onGet('/get').reply(200, {
            id: 1
        });

        return NetworkManager.getAPI('/get').then((response) => {
            expect(response.status).toEqual(200);
            expect(response.data).toEqual({id: 1});
        });
    });
});

describe('Class NetworkManager POST', () => {
    it('should be a function', () => {
        expect(typeof NetworkManager.postAPI).toBe('function');
    });

    it('should post object', () => {
        mockAxios.onPost('/post').reply(200, {
            id: 1
        });

        return NetworkManager.postAPI('/post', {'id': 1}).then((response) => {
            expect(response.status).toEqual(200);
        });
    });
});


