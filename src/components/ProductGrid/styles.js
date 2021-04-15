import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 384px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
