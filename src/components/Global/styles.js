import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 3rem;
  background: white;
  border: 2px #000 solid;
  transition: 0.3s ease;
  cursor: pointer;
  font-family: var(--font-primary);
  &:hover {
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.14);
    transform: translate(0%, -7%);
  }
`;
