import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 1rem;
  background-color: var(--background);
  color: var(--text);

  > div {
    &:first-child {
      background: url(${(props) => props.background});
      background-size: cover;
      background-repeat: no-repeat;
      height: 170px;
    }
    &:nth-child(2) {
      padding: 1rem 0rem;
      > p:first-child {
        font-family: var(--font-primary);
      }
    }
  }
`;

export const Qty = styled.input``;
