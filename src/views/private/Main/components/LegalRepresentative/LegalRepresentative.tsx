import { useState } from 'react';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { Row, Col } from 'react-flexbox-grid';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGlobal } from 'src/context/GlobalContext';
import { useAuth } from 'src/context/AuthContext';
import { NATIONALITIES, GENDERS, MARITAL_STATUS } from 'src/shared/data';
import { YupSchemaLegalRepresentative } from 'src/shared/schemasYup';
import { useLanguage } from 'src/context/LanguagesContext';

import { ILegalRepresentative } from 'src/shared/models/auth.model';
import Input from 'src/components/Core/Input';
import DatePicker from 'src/components/Core/DatePicker';
import Select from 'src/components/Core/Select';
import Upload from 'src/components/Core/Upload';
import AutoCompletePlaceMaps from 'src/components/Core/AutoCompletePlaceMaps';

import * as S from 'src/views/private/Main/components/Tabs/Tabs.styled';

const LegalRepresentative = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user, updateProfile } = useAuth();
  const { toggleAlert } = useGlobal();
  const { strings } = useLanguage();
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(YupSchemaLegalRepresentative),
    defaultValues: user?.legalRepresentative
  });

  const handleOnGetMetadataAddress = (params) => {
    if (params) {
      const { federativeEntityOrState, country } = params;
      setValue('federalEntityOfBirth', federativeEntityOrState);
      setValue('countryOfBirth', country);
    }
  };

  const toggleLoading = () => setLoading((s) => !s);

  const onSubmit = (form: ILegalRepresentative) => {
    toggleLoading();
    setTimeout(() => {
      updateProfile({ legalRepresentative: form });
      toggleAlert({ title: strings.ALERTS.updateSuccess, type: 'success' });
      toggleLoading();
    }, 500);
  };

  return (
    <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Row start="xs" className="w-100 pb6">
        <Input
          name="name"
          label={strings.PROFILE.legalRepresentative.name}
          control={control}
          md={12}
          hasSpacing={false}
          className="mb3"
        />
        <Input
          name="curp"
          label={strings.PROFILE.legalRepresentative.curp}
          control={control}
          md={4}
        />
        <Input
          name="rfc"
          label={strings.PROFILE.legalRepresentative.rfc}
          control={control}
          md={4}
        />
        <DatePicker
          name="dateOfBirth"
          label={strings.PROFILE.legalRepresentative.dateOfBirth}
          control={control}
          md={4}
        />
        <Input
          name="telephone"
          label={strings.PROFILE.legalRepresentative.telephone}
          control={control}
          md={6}
        />
        <Input
          name="email"
          label={strings.PROFILE.legalRepresentative.email}
          control={control}
          md={6}
        />
        <AutoCompletePlaceMaps
          name="address"
          label={strings.PROFILE.legalRepresentative.address}
          control={control}
          md={12}
          onGetMetadataAddress={handleOnGetMetadataAddress}
        />
        <Input
          name="federalEntityOfBirth"
          label={strings.PROFILE.legalRepresentative.federalEntityOfBirth}
          control={control}
          md={4}
        />
        <Input
          name="countryOfBirth"
          label={strings.PROFILE.legalRepresentative.countryOfBirth}
          control={control}
          md={4}
        />
        <Select
          name="nationality"
          label={strings.PROFILE.legalRepresentative.nationality}
          control={control}
          md={4}
          options={NATIONALITIES}
        />
        <Select
          name="gender"
          label={strings.PROFILE.legalRepresentative.gender}
          control={control}
          xs={6}
          md={6}
          options={GENDERS}
        />
        <Select
          name="maritalStatus"
          label={strings.PROFILE.legalRepresentative.maritalStatus}
          control={control}
          xs={6}
          md={6}
          options={MARITAL_STATUS}
        />
        <Upload
          name="identificationDocument"
          label={strings.PROFILE.legalRepresentative.identificationDocument}
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

export default LegalRepresentative;
