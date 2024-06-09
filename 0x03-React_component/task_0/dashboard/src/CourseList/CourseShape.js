import { shape } from "prop-types";
import PropTypes from 'prop-types';

const userShape = shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default userShape;
