import styled from 'styled-components';

export const LoginWrapper = styled.section`
  position: fixed;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const LoginContainer = styled.div`
  background: var(--background);
`;

const styles = `
  border-radius: 3px 3px 3px 3px;
  width: 100%;
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
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > button {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > label > input {
    ${styles}
  }
`;
