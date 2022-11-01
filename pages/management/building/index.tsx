import BuildingsList from '@/components/Building/BuildingsList';
import CreateBuildingForm from '@/components/Building/CreateBuildingForm';
import SidebarLayout from '@/layouts/SidebarLayout';
import styled from '@emotion/styled';
import { Box, Container, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'reactstrap';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function building({ }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
      <Card style={{ margin: '2em', border: 'none!important' }}>
        <TabsContainerWrapper>
        <Tabs value={value} onChange={handleChange}
          indicatorColor="primary" 
          centered
          style={{marginTop: '2em'}}
          >
            <Tab label={t('tabs.List buildings')} />
            <Tab label={t('tabs.Create building')} />
          </Tabs>
        </TabsContainerWrapper>
        <TabPanel value={value} index={0}>
          <Grid item xs={12}>
            <BuildingsList />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12}>
            <CreateBuildingForm />
          </Grid>
        </TabPanel>
      </Card>
    </>
  );
}

building.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default building;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
