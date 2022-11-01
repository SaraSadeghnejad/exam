import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Menu,
  MenuItem,
  Grid
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LocaleContext from '@/contexts/LocaleContext';
import { useStyleRegistry } from 'styled-jsx';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderMenu from './Menu';
import { useRouter } from 'next/router';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
       
`
);




function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const theme = useTheme();
  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      className={`bg-white-100 dark:bg-slate-900 ${router.locale === "fa" ? "rtl-header" : "ltr-header"}`}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <HeaderMenu />
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
