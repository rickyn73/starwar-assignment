import * as React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../../src/components/Nav';

const NavProps = {
    logo:'',
    handleClick: ()=>{}
}
describe('<Nav />', () => {
    it('check if Nav rendered', () => {
        const wrapper = shallow(<Nav {...NavProps} />);
        expect(wrapper).toBeDefined();
    });
});

