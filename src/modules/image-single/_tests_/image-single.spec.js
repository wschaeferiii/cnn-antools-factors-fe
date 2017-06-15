import React from 'react';
import { shallow } from 'enzyme';
import ImageSingle from '../index';

const PROPS = {
    slug: '_2016_12_us_chicago_disappearing_front_porch_index_html'
}

describe('Image-Single UI Component', () => {
    it('should render', () => {
        const wrapper = shallow(<ImageSingle slug = {PROPS.slug} />);
        expect(wrapper).toMatchSnapshot();
    })
})
