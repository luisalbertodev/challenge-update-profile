import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { DEVICE } from 'src/shared/data';

export const WrapperStyled = styled(Col)`
  max-width: 90% !important;

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 480px !important;
  }
`;

export const CoverStyled = styled(Col)`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  ${DEVICE.md} {
    display: none;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
`;
