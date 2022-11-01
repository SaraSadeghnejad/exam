import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

function financial({}: Props) {
  const { t } = useTranslation();
  return (
    <>     
      <Container maxWidth="xl" className='my-3'>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={4}
        >
      
          
        </Grid>
      </Container>

    </>
  );
}

 financial.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default financial;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}