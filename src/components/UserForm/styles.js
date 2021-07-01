import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
    border: 1px solid #fff;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 16px 16px;
    display: block;
    width: calc(100% - 64px);
    border-bottom: 3px solid pink;
    margin: 32px;
      &:focus {
        outline: none;
        color: #555;
        background-color: #FBFBFB;
        border-bottom: 3px solid #FF512F;
          &:valid {
            border-bottom: 3px solid #94ffa5;
          }
      };
`

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
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 8px 0;
`