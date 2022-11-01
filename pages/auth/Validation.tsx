import { Stack } from '@mui/material';
import AuthWrapper from '../../src/components/auth/AuthWrapper';
import AuthCardWrapper from '../../src/components/auth/AuthCardWapper';
import { Row, Col } from 'reactstrap';
import AuthValidation from '@/components/auth-forms/AuthValidation';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';

const Validation = () => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <>
            <AuthWrapper>
                <Col className="mx-auto d-flex align-items-center justify-content-center">
                    <Col xl="8" lg="12" md="12">
                        <Row className='d-flex flex-xl-row flex-sm-row-reverse align-items-center'>
                            
                            <Col xl="6" lg="6" md="4" xs="10" className="d-flex justify-content-center align-items-center m-md-auto ms-auto p-4">
                                <img src="/static/images/auth/Enter.png" alt="validation" />

                            </Col>

                            <Col xl="6" lg="6" md="12" xs="12" >
                                <AuthCardWrapper>
                                    <Stack >
                                        <span className="login-type text-center">{t("form.Enter Auth Code")}</span>
                                        <p className='text-center'>کد تایید برای شماره <span>۰۹۱۹۰۹۷۹۷۲۲</span> پیامک شد</p>
                                    </Stack>
                                    <AuthValidation />
                                </AuthCardWrapper>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </AuthWrapper>
        </>
    );
};

export default Validation;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}