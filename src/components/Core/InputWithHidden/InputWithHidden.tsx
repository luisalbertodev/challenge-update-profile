import { useState, FC, MouseEvent } from 'react';
import { useController } from 'react-hook-form';
import { useLanguage } from 'src/context/LanguagesContext';
import { Col } from 'react-flexbox-grid';

import IconButton from '@mui/material/IconButton';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface IProps extends BaseTextFieldProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: string;
  label: string;
}

const InputWithHidden: FC<IProps> = ({
  size = 'medium',
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label
}) => {
  const { strings } = useLanguage();
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue });

  const handleClickShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label={`input for ${name}`}
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {isShowPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Col xs={xs} md={md} className="mt3 mb3">
      <TextField
        error={invalid}
        label={label}
        type={isShowPassword ? 'text' : 'password'}
        helperText={strings.ERRORS[error?.message]}
        size={size}
        className="w-100"
        InputProps={{ endAdornment }}
        {...inputProps}
        inputRef={ref}
      />
    </Col>
  );
};

export default InputWithHidden;
