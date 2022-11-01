import { Stack } from '@mui/material';
import AuthLogin from '../../src/components/auth-forms/AuthLogin';
import AuthWrapper from '../../src/components/auth/AuthWrapper';
import AuthCardWrapper from '../../src/components/auth/AuthCardWapper';
import { Row, Col } from 'reactstrap';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SelectLanguage from '@/layouts/SidebarLayout/Header/Buttons/Language';


const Login = () => {
  return (
    <>
      <AuthWrapper>
        <Col className="mx-md-auto d-md-flex align-items-center justify-content-center">
          <Col xl="8" lg="12" md="12">
            <Row className='d-flex flex-lg-row-reverse'>
              <Col xl="6" lg="6" md="4" xs="6" className="p-4 d-flex justify-content-center align-items-center m-md-auto ms-auto">
                <img src="/static/images/auth/login-img.png" alt="login" />
              </Col>
              <Col xl="6" lg="6" md="12" className="px-4 py-2 d-flex justify-content-center">
                <AuthCardWrapper>
                  <Stack>
                    <img src="/static/images/logo/BiziLogoBlue.svg" alt="" style={{ width: '10em', margin: '0 auto 1em auto' }} />
                  </Stack>
                  <AuthLogin />
                  <SelectLanguage />
                </AuthCardWrapper>
              </Col>




            </Row>
          </Col>
        </Col>

      </AuthWrapper>

    </>
  );
};

export default Login;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}