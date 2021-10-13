import { SyntheticEvent, useState, useEffect } from 'react';
import Tab from '@mui/material/Tab';
import { Grid, Row } from 'react-flexbox-grid';
import { PLATFORM_STEP } from 'src/shared/data';
import useWindowSize from 'src/hooks/useWindowSize';
import { useLanguage } from 'src/context/LanguagesContext';
import { setLocalStorage, getLocalStorage } from 'src/helpers/localStorage';
import TabPanel from 'src/views/private/Main/components/TabPanel';
import Address from 'src/views/private/Main/components/Address';
import BankAccount from 'src/views/private/Main/components/BankAccount';
import GeneralInformation from 'src/views/private/Main/components/GeneralInformation';
import LegalRepresentative from 'src/views/private/Main/components/LegalRepresentative';
import * as S from './Tabs.styled';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const Tabs = () => {
  const { strings } = useLanguage();
  const { width: windowSize } = useWindowSize();
  const [currentTab, setTab] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setLocalStorage(PLATFORM_STEP, newValue);
  };

  useEffect(() => {
    const tab = getLocalStorage(PLATFORM_STEP);
    setTab(Number(tab));
  }, []);

  const isMobile = windowSize <= 1200;

  return (
    <S.WrapperStyled>
      <Grid>
        <Row center="xs">
          <S.TabsStyled
            value={currentTab}
            onChange={handleChange}
            aria-label="tabs-profile"
            orientation={isMobile ? 'horizontal' : 'vertical'}
            className={isMobile ? 'pb6' : ''}
            variant="scrollable"
          >
            <Tab label={strings.PROFILE.generalInformation} {...a11yProps(0)} />
            <Tab label={strings.PROFILE.addressLabel} {...a11yProps(1)} />
            <Tab
              label={strings.PROFILE.legalRepresentativeLabel}
              {...a11yProps(2)}
            />
            <Tab label={strings.PROFILE.bankAccountLabel} {...a11yProps(3)} />
          </S.TabsStyled>
          <TabPanel value={currentTab} index={0} isMobile={isMobile}>
            <GeneralInformation />
          </TabPanel>
          <TabPanel value={currentTab} index={1} isMobile={isMobile}>
            <Address />
          </TabPanel>
          <TabPanel value={currentTab} index={2} isMobile={isMobile}>
            <LegalRepresentative />
          </TabPanel>
          <TabPanel value={currentTab} index={3} isMobile={isMobile}>
            <BankAccount />
          </TabPanel>
        </Row>
      </Grid>
    </S.WrapperStyled>
  );
};

export default Tabs;
