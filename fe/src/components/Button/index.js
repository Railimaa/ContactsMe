import PropTypes from 'prop-types';

import { StyledButton } from './style';
import Spinner from '../Spinner';

export default function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onClick, // Por padrao já vai ser undefined, nao precisa tipar
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} danger={danger} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};
