import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
  isMobile: boolean;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, isMobile, ...other } = props;

  if (value !== index) return null;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={!isMobile ? 'tabpanel-custom' : ''}
      {...other}
    >
      <Box sx={isMobile ? {} : { pl: 3, pr: 3 }}>{children}</Box>
    </div>
  );
};

export default TabPanel;
