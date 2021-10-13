import { FC, MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import ToolbarMui from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useLanguage } from 'src/context/LanguagesContext';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from 'src/components/Core/Logo';
import { DEFAULT_THEME } from 'src/context/ThemeContext';
import { useAuth } from 'src/context/AuthContext';
import * as S from './Toolbar.styled';

const Toolbar: FC = () => {
  const { logout } = useAuth();
  const { strings } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: '#fff',
        color: DEFAULT_THEME.colors[DEFAULT_THEME.mode].primary,
        boxShadow: 'none',
        borderBottom: '1px solid #7e7e7e47'
      }}
    >
      <ToolbarMui>
        <Grid className="w-100">
          <Row between="xs" middle="xs">
            <Col xs={6}>
              <Logo maxWidth={116} />
            </Col>
            <Col xs={6}>
              <Row end="xs">
                <S.AccountIconStyled>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                  <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        logout();
                        handleClose();
                      }}
                    >
                      {strings.HEADER.logout}
                    </MenuItem>
                  </Menu>
                </S.AccountIconStyled>
              </Row>
            </Col>
          </Row>
        </Grid>
      </ToolbarMui>
    </AppBar>
  );
};

export default Toolbar;
