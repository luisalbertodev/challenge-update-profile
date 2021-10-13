import { useHistory } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ROUTES } from 'src/shared/data';
import { useLanguage } from 'src/context/LanguagesContext';

import * as S from './Page404.styled';

const Page404 = () => {
  const { strings } = useLanguage();
  const history = useHistory();

  const onToMainPage = () => history.push(ROUTES.HOME as string);

  return (
    <S.WrapperStyled>
      <Grid>
        <Row center="xs" middle="xs">
          <Col xs={10} className="text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">{strings.PAGE404.title}</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">{strings.PAGE404.subtitle}</h3>

              <p>{strings.PAGE404.description}</p>

              <a href={null} className="link_404" onClick={onToMainPage}>
                {strings.PAGE404.btnText}
              </a>
            </div>
          </Col>
        </Row>
      </Grid>
    </S.WrapperStyled>
  );
};

export default Page404;
