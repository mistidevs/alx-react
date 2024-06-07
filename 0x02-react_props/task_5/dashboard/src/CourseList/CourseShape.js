import { shape } from 'prop-types';

const userShape = shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export default userShape;
