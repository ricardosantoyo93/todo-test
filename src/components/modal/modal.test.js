import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Modal } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Modal />);
  });
  
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Modal />);
    expect(tree).toMatchSnapshot();
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
