import { useState } from 'react';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { Row, Col } from 'react-flexbox-grid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'src/context/AuthContext';
import { useGlobal } from 'src/context/GlobalContext';
import { useLanguage } from 'src/context/LanguagesContext';
import { INDUSTRIES, NATIONALITIES, TAX_REGIMES } from 'src/shared/data';
import { YupSchemaGeneralInformation } from 'src/shared/schemasYup';
import { IUser } from 'src/shared/models/auth.model';
import Input from 'src/components/Core/Input';
import DatePicker from 'src/components/Core/DatePicker';
import Select from 'src/components/Core/Select';
import Upload from 'src/components/Core/Upload';
import * as S from 'src/views/private/Main/components/Tabs/Tabs.styled';

const GeneralInformation = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user, updateProfile } = useAuth();
  const { toggleAlert } = useGlobal();
  const { strings } = useLanguage();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(YupSchemaGeneralInformation),
    defaultValues: user
  });

  const toggleLoading = () => setLoading((s) => !s);

  const onSubmit = (form: Partial<IUser>) => {
    toggleLoading();

    setTimeout(() => {
      updateProfile(form);
      toggleAlert({ title: strings.ALERTS.updateSuccess, type: 'success' });
      toggleLoading();
    }, 500);
  };

  return (
    <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Row start="xs" className="w-100 pb6">
        <Input
          name="companyName"
          label={strings.PROFILE.companyName}
          control={control}
          md={6}
          hasSpacing={false}
          className="mb3"
        />
        <Input
          name="tradename"
          label={strings.PROFILE.tradename}
          control={control}
          md={6}
          hasSpacing={false}
          className="mb3"
        />
        <Select
          name="nationality"
          label={strings.PROFILE.nationality}
          control={control}
          md={12}
          options={NATIONALITIES}
        />
        <DatePicker
          name="constitutionDate"
          label={strings.PROFILE.constitutionDate}
          control={control}
          md={12}
        />
        <Input
          name="rfc"
          label={strings.PROFILE.rfc}
          control={control}
          md={4}
        />
        <Select
          name="taxRegime"
          label={strings.PROFILE.taxRegime}
          control={control}
          md={4}
          options={TAX_REGIMES}
        />
        <Select
          name="industry"
          label={strings.PROFILE.industry}
          control={control}
          md={4}
          options={INDUSTRIES}
        />
        <Input
          name="TelephoneNumber"
          label={strings.PROFILE.TelephoneNumber}
          control={control}
          md={6}
        />
        <Input
          name="emailAddress"
          label={strings.PROFILE.emailAddress}
          control={control}
          md={6}
        />
        <Upload
          name="proofOfAddress"
          label={strings.PROFILE.proofOfAddress}
          control={control}
          md={12}
        />
        <Col md={12}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            className="w-100"
            disabled={isLoading}
          >
            {!isLoading ? strings.PROFILE.btnSave : strings.loading}
          </Button>
        </Col>
      </Row>
    </S.FormStyled>
  );
};

export default GeneralInformation;
