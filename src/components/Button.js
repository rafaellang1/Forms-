import styled from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: #00920F;
  font-size: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #FFF;
  border-radius: 16px;
  transition: background 0.2s ease-in;


  &:hover {
    background: #008000;
    cursor: pointer;
  }

  &:active {
    background: #00855555;
  }
`;
