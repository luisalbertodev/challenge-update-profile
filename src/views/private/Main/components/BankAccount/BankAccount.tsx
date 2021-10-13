import { useState } from 'react';
import Button from '@mui/material/Button';
import { useAuth } from 'src/context/AuthContext';
import { useForm } from 'react-hook-form';
import { useGlobal } from 'src/context/GlobalContext';
import { BANKS } from 'src/shared/data';
import { YupSchemaBankAccount } from 'src/shared/schemasYup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLanguage } from 'src/context/LanguagesContext';

import { IBankAccount } from 'src/shared/models/auth.model';
import Input from 'src/components/Core/Input';
import Select from 'src/components/Core/Select';
import { Row, Col } from 'react-flexbox-grid';
import * as S from 'src/views/private/Main/components/Tabs/Tabs.styled';

const BankAccount = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { user, updateProfile } = useAuth();
  const { toggleAlert } = useGlobal();
  const { strings } = useLanguage();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(YupSchemaBankAccount),
    defaultValues: user?.legalRepresentative
  });

  const toggleLoading = () => setLoading((s) => !s);

  const onSubmit = (form: IBankAccount) => {
    toggleLoading();
    setTimeout(() => {
      updateProfile({ bankAccount: form });
      toggleAlert({ title: strings.ALERTS.updateSuccess, type: 'success' });
      toggleLoading();
    }, 500);
  };

  return (
    <S.FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Row start="xs" className="w-100 pb6">
        <Select
          name="bank"
          label={strings.PROFILE.bankAccount.bank}
          control={control}
          md={12}
          hasSpacing={false}
          className="mb3"
          options={BANKS}
        />
        <Input
          name="clabe"
          label={strings.PROFILE.bankAccount.clabe}
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

export default BankAccount;
