import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DropdownMenu } from 'reactstrap';
import { menu } from './menu';
import { useTranslation } from 'react-i18next';


const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(

  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu({ item }) { 
   const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;
  const { t } = useTranslation();

const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const [openBuildingMenu, setOpenBuildingMenu] = useState(false);

  const handleBuildingMenu = () => {
     setOpenBuildingMenu((prev) => !prev);
  };
   const [openTasksMenu, setOpenTasksMenu] = useState(false);

   const handleTasksMenu = () => {
     setOpenTasksMenu((prev) => !prev);
   };
  return (
    <>
      <MenuWrapper>
        {/* <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                  {t("menu.home")}
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
          
        </List> */}

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
        
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboards/home' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<img src="/static/images/menu/home.svg" />}
                  >
                    <span className={router.locale === 'fa' ? 'mr-5' : 'ml-1'}>
                
                    </span>
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div" onClick={handleClick}>
                <Button
                  disableRipple
                  component="a"
                  onClick={closeSidebar}
                  startIcon={<img src="/static/images/menu/doc.svg" />}
                >
                  <span className={router.locale === 'fa' ? 'mr-4' : 'ml-1'}>
              
                  </span>
                  <span
                    className={router.locale === 'fa' ? 'mr-auto' : 'ml-auto'}
                  >
                
                  </span>
                </Button>
              </ListItem>

        
              <ListItem component="div">
                <NextLink href="/applications/messenger" passHref>
                  <Button
                    
                    
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<img src="/static/images/menu/letter.svg" />}
                  >
                    <span className={router.locale === 'fa' ? 'mr-5' : 'ml-1'}>
                      
                    </span>
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
      
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div" onClick={handleTasksMenu}>
                <Button
                
                  disableRipple
                  component="a"
                  onClick={closeSidebar}
                  startIcon={<img src="/static/images/menu/add.svg" />}
                >
                  <span className={router.locale === 'fa' ? 'mr-5' : 'ml-1'}>
                    
                  </span>
                  <span
                    className={router.locale === 'fa' ? 'mr-auto' : 'ml-auto'}
                  >
                    
                  </span>
                </Button>
              </ListItem>
            
       
  
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
        
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
      
              <ListItem component="div">
                <NextLink href="" passHref>
                  <Button
        
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<img src="/static/images/menu/setting.svg" />}
                  >
                    <span className={router.locale === 'fa' ? 'mr-5' : 'ml-1'}>
                    
                    </span>
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
              
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
