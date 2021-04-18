import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 1rem;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-family: var(--font-primary);
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBlock = styled.div`
  > div {
    > button {
      background: ${(props) => (props.active ? 'red' : 'white')};
      transition: all 3000ms linear;
    }
  }
`;

export const Slider = styled.span`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
