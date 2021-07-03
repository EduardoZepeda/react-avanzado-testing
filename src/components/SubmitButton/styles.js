import styled from 'styled-components'

export const Button = styled.button`
  transition: 0.2s;
  background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
  color: #fff;
  height: 48px;
  display: block;
  width: 50%;
  text-align: center;
  margin: auto;
  margin-top: 100px;
  background-size: 200% auto;
  border-radius: 24px;
  &:hover{
    background-position: right center;
  };
  &[disabled]{
    opacity: 0.3;
  }
`
