import styled from 'styled-components';
import { Button as ButtonBase } from '../../Global';

export const Button = styled(ButtonBase)`
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 40px;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: none;
    transform: none;
  }

  @media (min-width: 768px) {
    &:active {
      background: var(--red);
    }

    &:hover {
      box-shadow: 0px 5px 37px rgb(0 0 0 / 14%);
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(55, 65, 81, 1);
  color: var(--text);
  border-radius: 5px;

  overflow: hidden;
  justify-content: space-between;

  > img {
    width: 100%;
  }

  > div {
    padding: 1rem 0rem;
    color: white;
    > * {
      padding: 0 10px;
    }
    > p:first-child {
      font-size: 30px;
      font-family: var(--font-primary);
    }
  }

  &:hover {
    ${Button} {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s linear;
    }
  }
`;
