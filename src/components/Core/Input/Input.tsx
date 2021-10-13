import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useLanguage } from 'src/context/LanguagesContext';
import { Col } from 'react-flexbox-grid';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

interface IProps extends BaseTextFieldProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: string;
  label: string;
  hasSpacing?: boolean;
  className?: string;
}

const Input: FC<IProps> = ({
  size = 'medium',
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label,
  type,
  hasSpacing = true,
  className
}) => {
  const { strings } = useLanguage();

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue });

  return (
    <Col
      xs={xs}
      md={md}
      className={`${hasSpacing ? 'mt3 mb3' : ''} ${className}`}
    >
      <TextField
        error={invalid}
        label={label}
        type={type}
        helperText={strings.ERRORS[error?.message]}
        size={size}
        inputRef={ref}
        className="w-100"
        {...inputProps}
      />
    </Col>
  );
};

export default Input;
