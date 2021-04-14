import styled from 'styled-components';
import { ReactComponent as HeaderLogo } from '../../assets/svg/logo.svg';
import { ReactComponent as CartIconSVG } from '../../assets/svg/cart.svg';
import { ReactComponent as UserIconSVG } from '../../assets/svg/user.svg';

const svgStyles = `
width: 30px;
stroke: white;
`;

export const Logo = styled(HeaderLogo)`
  ${svgStyles}
`;

export const CartIcon = styled(CartIconSVG)`
  ${svgStyles}
`;
export const UserIcon = styled(UserIconSVG)`
  ${svgStyles}
`;

export const HeaderWrapper = styled.header`
  display: inline-flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--red);
  > span {
    color: white;
    font-size: 22px;
    font-weight: 900;
    line-height: 22px;
  }
`;
