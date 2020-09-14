import * as React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: white;
  color: black;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin-right: 5px;

  &:hover {
    background-color: red;
    opacity: 0.6;
    color: white;
    border: 1px solid black;
  }

  &.active {
    background: red;
    color: white;
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
