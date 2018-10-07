import * as React from 'react';
import { shallow } from 'enzyme';
import { PlanetList } from '../../src/components/PlanetList';

const PlanetListProps = {
    planet:{
        name:'',
        population:'',
        diameter:''
    },
    styleDetails: {
        width:''
    }
}
describe('<PlanetList />', () => {
    it('check if PlanetList rendered', () => {
        const wrapper = shallow(<PlanetList {...PlanetListProps} />);
        expect(wrapper).toBeDefined();
    });
});

