import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';

import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper = null;

  beforeEach(() => {
      wrapper = shallow(<App />);
  });
  
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<App />);
    expect(tree).toMatchSnapshot();
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
