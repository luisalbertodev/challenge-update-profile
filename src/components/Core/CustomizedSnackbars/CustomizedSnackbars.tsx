import { forwardRef } from 'react';
import { useGlobal } from 'src/context/GlobalContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = () => {
  const { alertData, isVisibleAlert, toggleAlert } = useGlobal();

  const onClose = () => {
    toggleAlert(null);
  };

  return (
    <Snackbar open={isVisibleAlert} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={alertData?.type}
        sx={{ width: '100%' }}
      >
        {alertData?.title}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbars;
