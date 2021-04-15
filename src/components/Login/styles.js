import styled from 'styled-components';

export const LoginWrapper = styled.section`
  position: fixed;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const LoginContainer = styled.div`
  background: var(--background);
  padding: 4rem;
  margin: 2rem;
  border-radius: 5px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  > p {
    font-family: var(--font-primary);
    font-size: 35px;
    margin-bottom: 0px;
  }

  > button {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > input {
    border-radius: 3px 3px 3px 3px;
    padding: 10px;
    border-width: 2px;
    border-color: #203631;
    font-weight: 700;
    font-style: italic;
    font-size: 14px;
    text-align: left;
    color: var(--text);
    font-family: var(--font-primary);
    &:focus {
      outline: var(--secondary);
    }
  }
`;

export const Success = styled.div`
  display: flex;
  flex-direction: column;
`;
