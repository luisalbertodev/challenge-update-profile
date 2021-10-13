import { useState } from 'react';
import Button from '@mui/material/Button';
import { useAuth } from 'src/context/AuthContext';
import { useGlobal } from 'src/context/GlobalContext';
import { useForm } from 'react-hook-form';
import { YupSchemaAddress } from 'src/shared/schemasYup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLanguage } from 'src/context/LanguagesContext';

import { IAddress } from 'src/shared/models/auth.model';
import Input from 'src/components/Core/Input';
import AutoCompletePlaceMaps from 'src/components/Core/AutoCompletePlaceMaps';

import { Row, Col } from 'react-flexbox-grid';
import * as S from 'src/views/private/Main/components/Tabs/Tabs.styled';

const Address = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user, updateProfile } = useAuth();
  const { toggleAlert } = useGlobal();
  const { strings } = useLanguage();
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(YupSchemaAddress),
    defaultValues: user?.address
  });

  const handleOnGetMetadataAddress = (params) => {
    if (params) {
      const { cityOrTown, federativeEntityOrState, country } = params;
      setValue('cityOrTown', cityOrTown);
      setValue('federativeEntityOrState', federativeEntityOrState);
      setValue('country', country);
    }
  };

  const toggleLoading = () => setLoading((s) => !s);

  const onSubmit = (form: IAddress) => {
    toggleLoading();
    setTimeout(() => {
      updateProfile({ address: form });
      toggleAlert({ title: strings.ALERTS.updateSuccess, type: 'success' });
      toggleLoading();
    }, 500);
  };

  return (
    <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Row start="xs" className="w-100 pb6">
        <AutoCompletePlaceMaps
          name="streetOrAvenue"
          label={strings.PROFILE.address.streetOrAvenue}
          control={control}
          md={12}
          hasSpacing={false}
          className="mb3"
          onGetMetadataAddress={handleOnGetMetadataAddress}
        />
        <Input
          name="exteriorNumber"
          label={strings.PROFILE.address.exteriorNumber}
          control={control}
          type="number"
          md={4}
        />
        <Input
          name="interiorNumber"
          label={strings.PROFILE.address.interiorNumber}
          control={control}
          type="number"
          md={4}
        />
        <Input
          name="zipCode"
          label={strings.PROFILE.address.zipCode}
          control={control}
          type="number"
          md={4}
        />
        <Input
          name="coloniaOrUrbanization"
          label={strings.PROFILE.address.coloniaOrUrbanization}
          control={control}
          md={6}
        />
        <Input
          name="cityOrTown"
          label={strings.PROFILE.address.cityOrTown}
          control={control}
          md={6}
        />
        <Input
          name="federativeEntityOrState"
          label={strings.PROFILE.address.federativeEntityOrState}
          control={control}
          md={6}
        />
        <Input
          name="country"
          label={strings.PROFILE.address.country}
          control={control}
          md={6}
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

export default Address;
