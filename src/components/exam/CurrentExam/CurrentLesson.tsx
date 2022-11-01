import styled from '@emotion/styled';
import { Box, Container, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card } from 'reactstrap';
import { blue, red } from '@mui/material/colors';
import ChemistryLesson from '../ChemistryLesson';

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

function CurrentLesson({}: Props) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    const [valueLesson, setValueLesson] = useState(0);

    const handleChangeLesson = (event: React.SyntheticEvent, newValue: number) => {
      setValueLesson(newValue);
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
                    padding:.7em;
                    margin-right: ${theme.spacing(3)};
                    font-size: ${theme.typography.pxToRem(16)};
                    color: ${theme.colors.alpha.black[50]};
                    width:auto!important;
                    border-bottom:none!important;
                    // display: none!important;

                    .MuiTouchRipple-root {
                        display: none;
                    }
                }
    
                &.Mui-selected:hover,
                &.Mui-selected {
                  background-color: red;
                  border-radius:2em;

                  border-bottom:none!important;
                    color: ${theme.colors.alpha.black[100]};
                }
            }
      `
    );
  
  return (
    <div>
         <Tabs value={value} onChange={handleChange}
          indicatorColor="primary" 
          centered
          style={{marginTop: '2em'}}
          >
            <Tab label="درس ها" />
          </Tabs>
        <TabPanel value={value} index={0}>
          <Grid item xs={12}>
          <Card style={{ margin: '2em', border: 'none!important' }}>
        <TabsContainerWrapper>
        <Tabs value={valueLesson} onChange={handleChangeLesson} sx={{ mt: 1 }}    
          indicatorColor="primary"
          style={{marginTop: '2em'}}  
          centered>
          <Tab label="حسابان" />
          <Tab label="آمار واحتمال" />
          <Tab label="ریاضیات گسسته" />
          <Tab label="شیمی" />
          <Tab label="فیزیک" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <Grid item xs={12}>
          <ChemistryLesson />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12}>

          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid item xs={12}>

          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid item xs={12}>

          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid item xs={12}>

          </Grid>
        </TabPanel>
        </TabsContainerWrapper>
      </Card>

          </Grid>
        </TabPanel>
    </div>
  )
}

export default CurrentLesson