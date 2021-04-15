import styled from 'styled-components';
import { ReactComponent as HeaderLogo } from '../../assets/svg/logo.svg';
import { ReactComponent as CartIconSVG } from '../../assets/svg/cart.svg';
import { ReactComponent as UserIconSVG } from '../../assets/svg/user.svg';

const svgStyles = `
width: 30px;
height: 30px;
stroke: white;
`;

export const Logo = styled(HeaderLogo)`
  ${svgStyles}
`;

export const CartIcon = styled(CartIconSVG)`
  ${svgStyles}
`;
export const UserIcon = styled(UserIconSVG)`
  stroke: ${(props) => (props.loggedIn ? 'var(--text)' : '')};
  ${svgStyles}
`;

export const HeaderWrapper = styled.header`
  display: inline-flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0px;
  background: var(--red);

  > div:first-child {
    margin-left: 10px;
    display: inline-flex;
    align-items: center;
    color: white;
    font-size: 22px;
    font-weight: 900;
    line-height: 22px;

    > span {
      padding-left: 5px;
    }
  }
`;

export const CartContainer = styled.div`
  display: inline-flex;
  pointer: cursor;
  margin-right: 5px;

  > span {
    color: white;
    font-size: 12px;
  }
`;
