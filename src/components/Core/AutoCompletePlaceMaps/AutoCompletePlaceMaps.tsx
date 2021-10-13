/* eslint-disable camelcase */
import { FC } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useController } from 'react-hook-form';
import { useLanguage } from 'src/context/LanguagesContext';

import { Col } from 'react-flexbox-grid';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';

interface IMetadataAddress {
  streetOrAvenue: string;
  cityOrTown: string;
  federativeEntityOrState: string;
  country: string;
}

interface IProps extends BaseTextFieldProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: string;
  label: string;
  hasSpacing?: boolean;
  className?: string;
  onGetMetadataAddress?: (params: IMetadataAddress | null) => void;
}

const AutoCompletePlaceMaps: FC<IProps> = ({
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label,
  hasSpacing = true,
  className,
  onGetMetadataAddress
}) => {
  const { strings } = useLanguage();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue });

  const handleInput = (val: string): void => {
    setValue(val);
  };

  const handleOnGetMetadataAddress = (val: string): IMetadataAddress | null => {
    const [currentRow] = data.filter((el) => el.description === val);

    if (currentRow) {
      const { terms = [], description } = currentRow;
      const [cityOrTown, federativeEntityOrState, country] = terms.map(
        (el) => el.value
      );

      return {
        streetOrAvenue: description,
        cityOrTown,
        federativeEntityOrState,
        country
      };
    }

    return null;
  };

  const handleSelect = (val: string): void => {
    setValue(val, false);
  };

  const renderSuggestions = () => {
    return data.map(({ description }: any) => description);
  };

  return (
    <Col xs={xs} md={md} className={`${hasSpacing ? 'mt3' : ''} ${className}`}>
      <FormControl sx={{ width: '100%' }} error={invalid}>
        <Autocomplete
          autoComplete
          includeInputInList
          filterSelectedOptions
          options={status === 'OK' ? renderSuggestions() : []}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <EditLocationAltOutlinedIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
          disabled={!ready}
          inputValue={value}
          onInputChange={(_event, val) => handleInput(val)}
          {...inputProps}
          onChange={(_event, val) => {
            handleSelect(val);
            inputProps.onChange(val);
            onGetMetadataAddress &&
              onGetMetadataAddress(handleOnGetMetadataAddress(val));
          }}
        />
        {invalid && (
          <FormHelperText>{strings.ERRORS[error?.message]}</FormHelperText>
        )}
      </FormControl>
    </Col>
  );
};

export default AutoCompletePlaceMaps;
