import PropTypes from 'prop-types';

import { BoldText } from '@/styles/UtilityStyles';

export default function Detail({ label, data }) {
  return (
    <p>
      <BoldText>{label}</BoldText>
      <span>{data}</span>
    </p>
  );
}
Detail.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired
};
