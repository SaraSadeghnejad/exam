import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useRef, useState } from 'react';
import Link from 'src/components/Link';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { useTranslation } from "next-i18next";
import HeaderNotifications from '../Buttons/Notifications';
import HeaderSearch from '../Buttons/Search';


const ListWrapper = styled(Box)()

function HeaderMenu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();


  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
           <HeaderNotifications />
        <HeaderSearch />
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/buttons"
          >
            {/* <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('navMenu.unit')}
              className='text-slate-500 dark:text-white'
            />
          </ListItem> */}
          {/* <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/forms"
          > */}
            {/* <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('navMenu.position')}
              className='text-slate-500 dark:text-white'
            />
          </ListItem> */}
          {/* <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/forms"
          > */}
            {/* <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('navMenu.financial reports')}
              className='text-slate-500 dark:text-white'
            /> */}
          </ListItem>
          {/* <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                 {t('navMenu.financial reports')}
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
              className='text-slate-500 dark:text-white'
            />
          </ListItem> */}
        </List>
      </ListWrapper>
      
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={Link} href="/">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/modals">
          Modals
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
