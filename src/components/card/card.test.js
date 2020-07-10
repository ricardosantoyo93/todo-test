import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Card } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  let wrapper = null;

  const card = {
      title: "",
      date: "",
      content: ""
  }

  beforeEach(() => {
    wrapper = shallow(<Card card={card} />);
  });
  
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Card card={card} />);
    expect(tree).toMatchSnapshot();
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should have custom content', () => {
    card.content = "Test"
    wrapper = shallow(<Card card={card} />);
    expect(wrapper.contains("Test")).toBe(true);
  });
});
