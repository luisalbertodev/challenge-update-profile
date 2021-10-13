import styled from 'styled-components';

export const AccountIconStyled = styled.div`
  background: ${(props) => props.theme.colors[props.theme.mode].primaryLight};
  border-radius: 8px;
  color: #fff;

  .MuiButtonBase-root {
    padding: 4px !important;
  }
`;
