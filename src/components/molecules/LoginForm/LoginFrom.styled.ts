import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 330px;

  @media (max-width: 769px) {
    width: 70%;
  }

  .inputbox {
    width: 100%;
    margin-bottom: 30px;
  }

  label {
    margin-bottom: 10px;
    color: #0ebeaf;
  }
`;
