

import AuthRegister from '@/components/auth-forms/AuthRegister';
import AuthCardWrapper from '@/components/auth/AuthCardWapper';
import AuthWrapper from '@/components/auth/AuthWrapper';
import SelectLanguage from '@/layouts/SidebarLayout/Header/Buttons/Language';
import { Grid, Stack } from '@mui/material';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';


const Register = () => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <>
            <AuthWrapper>
                <Col className="mx-md-auto d-md-flex align-items-center justify-content-center">
                    <Col xl="8" lg="12" md="12">
                        <Row className='d-flex flex-sm-row-reverse flex-lg-row'>
                            <Col xl="6" lg="6" md="4" xs="7" className="d-flex justify-content-center align-items-center m-md-auto ms-auto px-4 py-0">
                                <Grid container alignItems="center" justifyContent="end">
                                    <Image src="/static/images/auth/Fingerprint.png" alt="register"
                                        width={500}
                                        height={500}
                                    />
                                </Grid>
                            </Col>
                            <Col xl="6" lg="6" md="12" className="d-flex justify-content-center p-4">
                                <AuthCardWrapper>
                                    <Row className='d-flex justify-content-between align-items-center'>
                                        <Col xs="8">
                                            <span className={`login-type ${router.locale === "fa" ? "text-right" : "text-left"}`}>{t("form.register")}</span>
                                        </Col>
                                        <Col xs="3">
                                            <img src="/static/images/logo/BiziLogoBlue.svg" alt="" style={{ width: '10em', margin: '0 auto 1em auto' }} />
                                        </Col>
                                    </Row>
                                    <AuthRegister />
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

export default Register;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}