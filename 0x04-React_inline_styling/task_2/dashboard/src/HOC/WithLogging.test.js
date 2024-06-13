import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

const TestComponent = () => <p>Test Component</p>;

describe('WithLogging tests', () => {
  it('should call console.log on mount and dismount', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });

  it('should log out the right message on mount and dismount', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });
});
