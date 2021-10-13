/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useLanguage } from 'src/context/LanguagesContext';
import { Col } from 'react-flexbox-grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import SelectMui, { SelectProps } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

interface IProps extends SelectProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: string;
  label: string;
  hasSpacing?: boolean;
  className?: string;
  keyValue?: string;
  keyLabel?: string;
  options: any[];
}

const Select: FC<IProps> = ({
  size = 'medium',
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label,
  type,
  hasSpacing = true,
  className,
  keyValue = 'value',
  keyLabel = 'label',
  options = []
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
      <FormControl sx={{ width: '100%' }} error={invalid}>
        <InputLabel>{label}</InputLabel>
        <SelectMui
          className="w-100"
          label={label}
          type={type}
          size={size}
          inputRef={ref}
          {...inputProps}
        >
          {options.map((el, index) => {
            return (
              <MenuItem key={index} value={el[keyValue]}>
                {el[keyLabel]}
              </MenuItem>
            );
          })}
        </SelectMui>
        {invalid && (
          <FormHelperText>{strings.ERRORS[error?.message]}</FormHelperText>
        )}
      </FormControl>
    </Col>
  );
};

export default Select;
