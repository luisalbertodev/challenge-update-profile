import TabsMui from '@mui/material/Tabs';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding-top: 4em;

  .container .row {
    width: 100%;
    margin: auto;
  }

  .MuiButtonBase-root {
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    opacity: 0.5;
  }

  .MuiSvgIcon-root {
    margin: 0 4px 0 0 !important;
  }

  .Mui-selected {
    opacity: 1;
  }

  .tabpanel-custom {
    width: 80%;
  }
`;

export const TabsStyled = styled(TabsMui)`
  .Mui-selected {
    color: ${(props) =>
      `${props.theme.colors[props.theme.mode].light} !important`};
    background: ${(props) => props.theme.colors[props.theme.mode].primaryLight};
    border-radius: 16px;
  }

  .MuiTabs-indicator {
    display: none;
  }

  .MuiTabs-root {
    width: 20%;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
`;
