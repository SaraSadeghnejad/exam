

import AuthCardWrapper from '@/components/auth/AuthCardWapper';
import AuthWrapper from '@/components/auth/AuthWrapper';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'react-i18next';
import AuthForgotPassword from '@/components/auth-forms/AuthForgotPassword';


const ForgotPassword = () => {
    const { t } = useTranslation();

    return (
        <>
            <AuthWrapper>
                <Col className="mx-md-auto d-md-flex align-items-center justify-content-center">
                    <Col xl="8" lg="12" md="12">
                        <Row className='d-flex flex-md-column-reverse flex-sm-column-reverse flex-column-reverse flex-lg-row align-items-center'>

                            <Col xl="6" lg="6" md="12" >
                                
                                <AuthCardWrapper>
                                    <img src="/static/images/logo/BiziLogoBlue.svg" alt="" style={{ width: '10em', margin: '0 auto 1em auto' }} />
                                    <span className="login-type text-center">{t('form.Password recovery')}</span>

                                    <AuthForgotPassword />
                                </AuthCardWrapper>
                            </Col>

                            <Col xl="6" lg="6" md="4" xs="7" className="d-flex justify-content-center align-items-center m-md-auto ms-auto px-4 py-0">
                                <Grid container alignItems="center" justifyContent="end">
                                    <Image src="/static/images/auth/ForgotPassword.svg" alt="register"
                                        width={600}
                                        height={600}
                                    />
                                </Grid>
                            </Col>

                        </Row>
                    </Col>
                </Col>
            </AuthWrapper>
        </>
    );
};

export default ForgotPassword;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}