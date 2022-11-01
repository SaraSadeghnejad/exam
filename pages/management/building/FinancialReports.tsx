import SidebarLayout from '@/layouts/SidebarLayout';
import { Grid, Container } from '@mui/material';
import RecentOrders from '@/content/Management/Transactions/RecentOrders';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import TabPanel from '@mui/lab/TabPanel';

function FinancialReports() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '2em' }}>
        <Card>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label={t('table.Create task')} />
            <Tab label={t('table.Create task')} />
          </Tabs>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <TabPanel value={value} index={0}>
                <RecentOrders />
              </TabPanel>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}

FinancialReports.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default FinancialReports;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
