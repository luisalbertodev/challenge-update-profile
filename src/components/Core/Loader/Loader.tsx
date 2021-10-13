import { FC } from 'react';
import { Row } from 'react-flexbox-grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useLanguage } from 'src/context/LanguagesContext';

const Loader: FC = () => {
  const { strings } = useLanguage();
  return (
    <Row center="xs" middle="xs" className="h-100-vh">
      <Fade in unmountOnExit style={{ transitionDelay: '300ms' }}>
        <div>
          <CircularProgress />
          <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
            {strings.loading}
          </Typography>
        </div>
      </Fade>
    </Row>
  );
};

export default Loader;
