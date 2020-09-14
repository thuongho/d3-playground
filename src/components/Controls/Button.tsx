import * as React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: royalblue;
  color: white;
  max-width: 80px;
  min-width: 60px;
  height: 60px;

  &.active {
    background: red;
  }
`;

const Button = ({ label, name, active, onClick, category }) => {
  let className = '';

  if (active) {
    className += 'active';
  }

  return (
    <ButtonContainer
      className={className}
      onClick={() => onClick(name, category)}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
