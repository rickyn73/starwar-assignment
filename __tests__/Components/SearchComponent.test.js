import * as React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from '../../src/components/SearchComponent';

const SearchProps = {
    planetList:[{
        name:'',
        population:'',
        diameter:''
    }]
}
describe('<SearchComponent />', () => {
    it('check if SearchComponent rendered', () => {
        const wrapper = shallow(<SearchComponent {...SearchProps} />);
        expect(wrapper).toBeDefined();
    });
});

