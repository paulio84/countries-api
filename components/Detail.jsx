import PropTypes from 'prop-types';

import { BoldText } from '@/styles/UtilityStyles';

export default function Detail({ label, data, className }) {
  return (
    <p className={className}>
      <BoldText>{label}</BoldText>
      <span>{data}</span>
    </p>
  );
}
Detail.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  className: PropTypes.string
};
