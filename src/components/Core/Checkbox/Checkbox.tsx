import { FC } from 'react';
import CheckboxMui from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useController } from 'react-hook-form';

import { Row, Col } from 'react-flexbox-grid';

interface IProps {
  xs?: number;
  md?: number;
  name: string;
  control: any;
  defaultValue?: boolean;
  label: string;
  hasSpacing?: boolean;
  className?: string;
}

const Checkbox: FC<IProps> = ({
  xs = 12,
  md = 6,
  name,
  control,
  defaultValue = '',
  label,
  hasSpacing,
  className
}) => {
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
      <Row middle="xs">
        <CheckboxMui {...inputProps} inputRef={ref} />
        <label htmlFor={label}>
          <Typography variant="body2" color="text.primary">
            {label}
          </Typography>
        </label>
      </Row>
      {invalid && (
        <Row>
          <Col xs={12}>
            <Typography variant="body2" color="error">
              {error?.message}
            </Typography>
          </Col>
        </Row>
      )}
    </Col>
  );
};

export default Checkbox;
