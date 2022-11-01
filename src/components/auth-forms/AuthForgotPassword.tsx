import InputChangeHandler from '@/utils/InputChangeHandler';
import { FormGroup, Row, Col, Label, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Link from 'next/link';


const AuthForgotPassword = () => {
    const { t } = useTranslation();

    const handleSubmit = () => {

    }

    const [data, setData] = useState({

        phone_number: '',
    });
    return (
        <>
            <form onSubmit={handleSubmit} action="" method="post">
                <FormGroup dir="rtl">
                    <Row>
                        <Col lg="12">
                            <FormGroup>
                                <Label className='w-100 text-center mt-2 mb-4'>{t("form.Please enter your contact number")}</Label>
                                <input
                                    type="tel"
                                    className="custom-input text-left"
                                    value={data.phone_number}
                                    id="phone_number"
                                    name="phone_number"
                                    dir="ltr"
                                    onChange={(e) => InputChangeHandler(e, data, setData)} />
                            </FormGroup>
                        </Col>
                        <Col lg="12" className="my-2 d-flex justify-content-center">
                            <Button type="submit" className='login-btn'  >{t("form.send")}</Button>
                        </Col>
                    </Row>
                </FormGroup>

                <Link href="/auth/Login">
                    <a className="link-password">
                        {t('form.back to login')}
                    </a>
                </Link>
            </form>
        </>
    );
}

export default AuthForgotPassword;