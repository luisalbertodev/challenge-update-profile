import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useLanguage } from 'src/context/LanguagesContext';
import { Col } from 'react-flexbox-grid';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

import FormHelperText from '@mui/material/FormHelperText';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import FormControl from '@mui/material/FormControl';

import useWindowSize from 'src/hooks/useWindowSize';

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

const DatePicker: FC<IProps> = ({
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label,
  hasSpacing = true,
  className
}) => {
  const { strings } = useLanguage();

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue });

  const { width: windowSize } = useWindowSize();

  const INPUT_FORMAT = 'dd/MM/yyyy';
  const isMobile = windowSize < 768;

  return (
    <Col
      xs={xs}
      md={md}
      className={`${hasSpacing ? 'mt3 mb3' : ''} ${className}`}
    >
      <FormControl sx={{ width: '100%' }} error={invalid}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {!isMobile && (
            <DesktopDatePicker
              label={label}
              inputFormat={INPUT_FORMAT}
              renderInput={(params) => <TextField {...params} />}
              {...inputProps}
              inputRef={ref}
              className="w-100"
            />
          )}
          {isMobile && (
            <MobileDatePicker
              label={label}
              inputFormat={INPUT_FORMAT}
              renderInput={(params) => <TextField {...params} />}
              {...inputProps}
              inputRef={ref}
              className="w-100"
            />
          )}
          {invalid && (
            <FormHelperText>{strings.ERRORS[error?.message]}</FormHelperText>
          )}
        </LocalizationProvider>
      </FormControl>
    </Col>
  );
};

export default DatePicker;
