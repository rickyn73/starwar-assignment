import * as React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../src/components/LoginComponent';

const testValues = {
    userName: 'FOO',
    password: 'BAZ',
    login: jest.fn(),
};
let wrapper = '';
beforeAll(()=> {
    wrapper = shallow(<LoginComponent {...testValues} />);
}) 
describe('<LoginComponent />', () => {
    it('check if Login Component rendered', () => {
        expect(wrapper).toBeDefined();
    });

    it('Check user name entered', () => {
        wrapper.setState({ userName: testValues.userName });
        expect(wrapper.state().userName).toEqual(testValues.userName);
        expect(wrapper.state().userName).toBeDefined();
    });

    it('Check password entered',() => {
        wrapper.setState({ password : testValues.password });
        expect(wrapper.state().password).toEqual(testValues.password);
        expect(wrapper.state().password).toBeDefined();
    })

    it('Check getUserName called', () => {
        wrapper.instance.getUserName = jest.fn();
        wrapper.instance().getUserName(testValues.userName);
        expect(wrapper.state().userName).toEqual(testValues.userName);
    });

    it('Check getPassword called',() => {
        wrapper.instance.getPassword = jest.fn();
        wrapper.instance().getPassword(testValues.password);
        expect(wrapper.state().password).toEqual(testValues.password);
    })

    it('Check onSubmit called',() => {
        const event = {preventDefault: jest.fn()};
        wrapper.instance.onSubmit = jest.fn();
        wrapper.instance().onSubmit(event);
        expect(wrapper.instance().props.login).toHaveBeenCalled();
    })
});

