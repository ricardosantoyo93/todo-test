import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Render } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Render', () => {
  let wrapper = null;

  beforeEach(() => {
      wrapper = shallow(<Render />);
  });
  
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Render />);
    expect(tree).toMatchSnapshot();
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should be titled Done', () => {
    wrapper = shallow(<Render source="done" done={[]} />);
    expect(wrapper.contains(<h3>Done</h3>)).toBe(true);
  });
});
