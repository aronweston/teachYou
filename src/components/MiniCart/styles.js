import styled from 'styled-components';
import { Button as ButtonBase } from '../Global';

const visible = `
transform: translateX(0%);
transition: transform 0.5s;
opacity: 1;
`;

const notVisible = `
opacity: 0;
transform: translateX(100%);
transition: transform 0.5s, opacity 5s ease-out;
`;

export const MiniCartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9000;
  height: 100vh;
  width: 350px;
  background-color: var(--background);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  ${(props) => (props.visible === true ? visible : notVisible)};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CloseBar = styled.div`
  padding: 25px;
  position: relative;
  line-height: 1;
  z-index: 11;
  font-size: 40px;
  color: black;
  cursor: pointer;
  text-align: left;

  > button {
    font-family: var(--font-primary);
    font-size: 30px;
    color: var(--text);
    transition: color 0.2s

    &:hover {
      color: var(--red);
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const CartContainer = styled.div`
  overflow: auto;
  height: calc(100% - 100px);
`;

export const RemoveButton = styled(ButtonBase)`
  margin-top: 15px;
  padding: 0 30px;
  height: 30px;
`;

export const CartItem = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
  grid-gap: 10px;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    padding: 15px 0px;
  }

  > img {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 90%;
      margin-right: auto;
    }
  }

  > div {
    > p:first-child {
      font-size: 20px;
      font-family: var(--font-primary);
      font-weight: bold;
    }

    > p:last-child {
      font-size: 17px;
      margin: 10px 0;
      font-weight: bold;
    }
  }
`;

export const EmptyCart = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > *:not(button) {
    padding-bottom: 20px;
  }

  > p:first-child {
    font-size: 35px;
    line-height: 35px;
    font-family: var(--font-primary);
    color: black;
    padding: 25px 0px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;
    width: 70%;
  }

  @media (min-width: 768px) {
    > p {
      width: 80%;
    }
  }

  @media (min-width: 1024px) {
    > p {
      width: 60%;
    }
  }
`;
