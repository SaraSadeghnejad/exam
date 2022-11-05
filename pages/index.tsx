import CurrentExam from '@/components/Exam/CurrentExam';
import NextExam from '@/components/Exam/NextExam';
import PreviousExam from '@/components/Exam/PreviousExam';
import SidebarLayout from '@/layouts/SidebarLayout';
import styled from '@emotion/styled';
import { Box, Container, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'reactstrap';
import BreadCrumbs from '@/components/BreadCrumbs';
import GuideBoard from '@/components/Exam/GuideBoard';

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
          style={{ padding: '-2em', border: 'none!important' }}
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

function Exam({ }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabsContainerWrapper = styled(Box)(
    ({ theme }) => `
          .MuiTabs-indicator {
            
              box-shadow: none;
              border: 0;
          }
  
          .MuiTab-root {
              &.MuiButtonBase-root {
                  padding: 0;
                  margin-right: ${theme.spacing(3)};
                  font-size: ${theme.typography.pxToRem(16)};
                  color: #4182B4;
                  min-height:48px;
                  height: 48px;
                  font-weight: 400;
                  border-bottom: 1px solid #1263A1;
                  border-radius: 10px 10px 0px 0px;
                  .MuiTouchRipple-root {
                      display: none;
                  }
              }
  
              &.Mui-selected:hover,
              &.Mui-selected {
                  color: #fff;
                  background: #1263A1;
                  border-bottom: 1px solid #1263A1;
                  border-radius: 10px 10px 0px 0px;
                  font-weight: bold;
              }
          }
    `
  );

  const { t } = useTranslation();
  return (
    <>
    <div className='mt-3 mr-5'>
    <BreadCrumbs />
    </div>
    <GuideBoard />
      <Card style={{ margin: '2em', border: 'none!important' }}>
      <TabsContainerWrapper>
        <Tabs value={value} onChange={handleChange}
          indicatorColor="primary" 
          centered
          style={{marginTop: '0em'}}
          >
            <Tab label="آزمون های گذشته" />
            <Tab label="آزمون های جاری" />
            <Tab label="آزمون های آینده" />
          </Tabs>
        <TabPanel value={value} index={0}>
          <Grid item xs={12}>
           <PreviousExam />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12}>
          <CurrentExam />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid item xs={12}>
          <NextExam />
          </Grid>
        </TabPanel>
        </TabsContainerWrapper>
      </Card>
    </>
  );
}

Exam.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Exam;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}