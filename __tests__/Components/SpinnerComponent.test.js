import * as React from 'react';
import { shallow } from 'enzyme';
import { SpinnerComponent } from '../../src/components/SpinnerComponent';


describe('SpinnerComponent test suite', () => {
		it('check if component rendered with loader', () => {
				const wrapper = shallow(<SpinnerComponent loading={true} />);
				expect(wrapper.find('.spinner-mask').length).toBe(1);
		});
		it('check component rendered without loader', () => {
				const wrapper = shallow(<SpinnerComponent loading={false} />);
				expect(wrapper.find('.spinner-mask').length).toBe(0);
		});
});
