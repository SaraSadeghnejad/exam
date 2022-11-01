import CreateUnitForm from '@/components/Units/CreateUnitForm';
import UnitsList from '@/components/Units/UnitsList';
import SidebarLayout from '@/layouts/SidebarLayout';
import TabPanel, { TabPanelProps } from '@mui/lab/TabPanel';
import { Box, Card, Container, Grid, styled, Tab, Tabs, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

function unit({}: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container
          style={{ padding: '3em', border: 'none!important' }}
          maxWidth="lg"
        >
          <Typography>{children}</Typography>
        </Container>
      )}
    </div>
  );
}
const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(16)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `
);
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '2em' }}>
      <Card>
    <TabsContainerWrapper>
        <Tabs value={value} onChange={handleChange}
          indicatorColor="primary"
          style={{marginTop: '2em'}} 
          centered
          >
          <Tab label={t('tabs.List of units')} />
          <Tab label={t('tabs.Create unit')} />
          </Tabs>
         <TabPanel value={value} index={0}>
          <Grid item xs={12}>
            <UnitsList />
          </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Grid item xs={12}>
            <CreateUnitForm />
          </Grid>
          </TabPanel>
        </TabsContainerWrapper>
      </Card>
      </Container>
    </>
  );
}

 unit.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default unit;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}