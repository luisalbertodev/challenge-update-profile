import { Row, Col } from 'react-flexbox-grid';
import { BG_LOGIN } from 'src/shared/data';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useForm } from 'react-hook-form';
import { YupSchemaLogin } from 'src/shared/schemasYup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLanguage } from 'src/context/LanguagesContext';
import { useAuth } from 'src/context/AuthContext';

import { IUser } from 'src/shared/models/auth.model';
import InputWithHidden from 'src/components/Core/InputWithHidden';
import Checkbox from 'src/components/Core/Checkbox';
import Input from 'src/components/Core/Input';
import Logo from 'src/components/Core/Logo';
import * as S from './Login.styled';

const Login = () => {
  const { login } = useAuth();
  const { strings } = useLanguage();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(YupSchemaLogin),
    defaultValues: { remember: false }
  });

  const onSubmit = (form: Partial<IUser>) => {
    login(form);
  };

  return (
    <div
      className="h-100-vh overflow-hidden"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="250"
      data-aos-offset="50"
    >
      <Row center="xs" middle="xs" className="h-100">
        <Col md={6} className="h-100">
          <Row center="xs" className="h-100">
            <S.WrapperStyled xs={12}>
              <Row center="xs" className="h-100">
                <Col xs={12} className="form-content">
                  <Row>
                    <Logo maxWidth={116} />
                  </Row>
                  <Row start="xs">
                    <Col xs={12}>
                      <Typography variant="h4">{strings.AUTH.title}</Typography>
                      <Typography
                        sx={{ mt: 1, mb: 1.5 }}
                        color="text.secondary"
                      >
                        {strings.AUTH.subtitle}
                      </Typography>
                    </Col>
                    <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
                      <Input
                        name="emailAddress"
                        label={strings.AUTH.emailField}
                        control={control}
                        md={12}
                      />
                      <InputWithHidden
                        name="password"
                        label={strings.AUTH.passwordField}
                        control={control}
                        md={12}
                      />

                      <Col md={12} className="mb4">
                        <Row between="xs" middle="xs">
                          <Checkbox
                            name="remember"
                            label={strings.AUTH.rememberField}
                            control={control}
                            xs={6}
                            md={6}
                          />
                          <Col xs={6}>
                            <Row end="xs">
                              <Typography variant="body2" color="error">
                                {strings.AUTH.forgotPassword}
                              </Typography>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={12}>
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          className="w-100"
                        >
                          {strings.AUTH.btnSignIn}
                        </Button>
                      </Col>
                    </S.FormStyled>
                  </Row>
                  <Row start="xs">
                    <Col xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        {strings.version}
                      </Typography>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </S.WrapperStyled>
          </Row>
        </Col>
        <S.CoverStyled md={6}>
          <img src={BG_LOGIN} alt="cover-login" />
        </S.CoverStyled>
      </Row>
    </div>
  );
};

export default Login;
