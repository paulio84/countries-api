import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ iconLeft, iconRight, clickHandler, children, className }) {
  const IconLeft = withIconClass(iconLeft);
  const IconRight = withIconClass(iconRight);

  return (
    <StyledButton className={className} onClick={clickHandler}>
      {IconLeft && <IconLeft />}
      {children}
      {IconRight && <IconRight />}
    </StyledButton>
  );
}
Button.propTypes = {
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  clickHandler: PropTypes.func
};

function withIconClass(WrappedComponent) {
  if (WrappedComponent) {
    const IconClass = (props) => <WrappedComponent className="icon" {...props} />;
    return IconClass;
  }

  return WrappedComponent;
}

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--elements);
  border-radius: 4px;
  border-width: 0;
  box-shadow: var(--box-shadow);
  color: var(--color);
  cursor: pointer;
  display: flex;
  font-family: 'NunitoSansLight';
  outline: none;
  padding: 0.5em 1.75em;

  &:hover {
    box-shadow: var(--dark-box-shadow);
  }

  .icon {
    margin-right: 1.5rem;
    width: 1em;
  }
`;
