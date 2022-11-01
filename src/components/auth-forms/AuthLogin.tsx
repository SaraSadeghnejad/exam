/* eslint-disable no-unused-vars */
// material-ui
import { getCookies, SignIn } from '@/api/auth';
import InputChangeHandler from '@/utils/InputChangeHandler';
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormGroup, Row, Col, Input, Label, Button } from 'reactstrap';
import InputPasswordToggle from '../auth/InputPasswordToggle';
import Link from 'next/link';
import cookie from 'cookie';
import { useTranslation } from "next-i18next";
import NotifyError from '@/utils/NotifyError';
// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ locale }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const [data, setData] = useState({
        phone_number: '',
        password: ''

    });
    const [loggedIn, setLoggedIn] = React.useState(false);
    function getCookie(name) {
        if (!document.cookie) {
            return null;
        }

        const xsrfCookies = document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.startsWith(name + '='));

        if (xsrfCookies.length === 0) {
            return null;
        }
        return decodeURIComponent(xsrfCookies[0].split('=')[1]);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        getCookies()
            .then(res => {
                SignIn(data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Credentials": true,
                            'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,

                        },
                    }).then(response => {
                        console.log(response)
                        if (response.status === 200) {
                            setLoggedIn(true);
                            router.push('/dashboards/crypto')
                        }
                    }).catch(err => NotifyError(err));
            });

    }

    const textAlign = router.locale === "fa" ? "text-right" : "text-left";
    return (
        <>
            <form onSubmit={handleSubmit} action="" method="post">
                <FormGroup dir="rtl" className='w-100'>
                    <Col lg="12">
                        <FormGroup>

                            <Label className={`w-100 ${textAlign}`}>{t("form.phoneNumber")}<span>*</span></Label>

                            <input
                                style={{ direction: 'ltr', textAlign: 'left' }}
                                type="tel"
                                className="custom-input"
                                value={data.phone_number}
                                id="phone_number"
                                name="phone_number"
                                onChange={(e) => InputChangeHandler(e, data, setData)} />
                        </FormGroup>
                    </Col>
                    <Row>
                        <Col lg="12">

                            <Label className={`w-100 ${textAlign}`}>{t("form.Password")}<span>*</span></Label>

                            <FormGroup>
                                <InputPasswordToggle
                                    value={data.password}
                                    id="password"
                                    name="password"
                                    onChange={(e) => InputChangeHandler(e, data, setData)} dir="ltr"
                                />
                            </FormGroup>
                            <small className={`login-save-password w-100 d-block ${textAlign}`}>
                                <Input type="checkbox"
                                    style={{
                                        marginLeft: `${router.locale === "fa" ? ".5em" : "1em"}`,
                                        marginRight: `${router.locale === "fa" ? "1em" : ".5em"}`,
                                        float: `${router.locale === "fa" ? "right" : "left"}`,
                                        marginTop: "0"
                                    }} />
                                <span>{t("form.rememberMe")}</span>
                            </small>
                        </Col>

                        <Col lg="12" className="my-3 d-flex justify-content-center">
                            <Button type="submit" className='login-btn'  >{t("form.login")}</Button>
                        </Col>

                        <Col>
                            <Link href='/auth/ForgotPassword'>
                            <a className="link-password">
                                {router.locale === "fa" ? <b>{t("form.forgetpassword")}؟</b> : <b>?{t("form.forgetpassword")}</b>}
                            </a>
                        </Link>

                        <Link href="auth/Register">
                            <a className="link-password">
                                {router.locale === "fa" ?
                                    <span>{t("form.Have_account")} <b> {t("form.register")} </b></span> :
                                    <span>{t("form.Have_account")} <b>  {t("form.register")} </b> </span>
                                }
                            </a>
                        </Link>
                    </Col>
                </Row>


            </FormGroup>
        </form>
        </>
    );
};

export default FirebaseLogin;
