/* eslint-disable no-empty */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { Col } from 'react-flexbox-grid';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
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
        {value &&
          [value].map((el, key) => {
            const labelId = `checkbox-list-secondary-label-${key}`;
            return (
              <ListItem
                key={key}
                secondaryAction={
                  <IconButton edge="end" onClick={() => onChange('')}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={`Avatar n°${key}`} src={value} />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`Archivo ${key + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        {invalid && <FormHelperText>{error?.message}</FormHelperText>}
      </FormControl>
    </Col>
  );
};

export default Upload;
