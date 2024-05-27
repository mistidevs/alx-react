import { shallow } from 'enzyme';
import Header from './Header';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});