import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '../../src/components/Input';

const InputProps = {
    type:'text',
    onChange: ()=>{},
    name: '',
    placeholder:''
}
describe('<Input />', () => {
    it('check if Input rendered', () => {
        const wrapper = shallow(<Input {...InputProps} />);
        expect(wrapper).toBeDefined();
    });
});

