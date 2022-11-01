import Factor from '@/components/Charge/Factor/Factor';
import MessageList from '@/components/Messages/MessageList';
import BoxTitle from '@/components/Title/BoxTitle';
import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import RecentOrders from '@/content/Management/Transactions/RecentOrders';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

function Home({}: Props) {
  const { t } = useTranslation();
  return (
    <>
      {/* <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
     
      <Container maxWidth="xl" className='my-3'>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12} >
            <BoxTitle title={t("pageTitles.my tasks")} />
            <RecentOrders />
          </Grid>

          <Grid item lg={4} md={6} xs={12}>
            <BoxTitle title={t("pageTitles.last charge bill")} />
              <Factor />
          </Grid>

          <Grid item lg={4} md={6} xs={12}>
            <BoxTitle title={t("pageTitles.messages")} />
              <MessageList />
          </Grid>

          <Grid item lg={8} xs={12} >
            
            <AccountBalance />
          </Grid>
          
          {/* <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
          
          </Grid> */}
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

Home.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Home;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}