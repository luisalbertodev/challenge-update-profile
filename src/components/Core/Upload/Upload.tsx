/* eslint-disable no-empty */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Col } from 'react-flexbox-grid';
import { useController } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useLanguage } from 'src/context/LanguagesContext';
import { getBase64 } from 'src/helpers/utils';
import * as S from './Upload.styled';

interface IProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: string;
  label: string;
  hasSpacing?: boolean;
  className?: string;
}

const Upload: FC<IProps> = ({
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
    field: { onChange, value },
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue });

  const onChargeFile = async (event) => {
    try {
      const file = (event.target as HTMLInputElement).files[0];
      const convertFile = await getBase64(file);
      onChange(convertFile);
    } catch (e) {}
  };

  return (
    <Col
      xs={xs}
      md={md}
      className={`${hasSpacing ? 'mt3 mb3' : ''} ${className}`}
    >
      <FormControl sx={{ width: '100%' }} error={invalid}>
        <S.UploadStyled htmlFor="icon-button-file">
          <input
            id="icon-button-file"
            accept=".jpeg, .png, .webp, .jpg"
            type="file"
            className="d-none"
            onChange={onChargeFile}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </S.UploadStyled>
        {value && (
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() => onChange('')}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={value} />
              </ListItemAvatar>
              <ListItemText
                id="checkbox-list-secondary-label"
                primary="Archivo "
              />
            </ListItemButton>
          </ListItem>
        )}
        {invalid && (
          <FormHelperText>{strings.ERRORS[error?.message]}</FormHelperText>
        )}
      </FormControl>
    </Col>
  );
};

export default Upload;
