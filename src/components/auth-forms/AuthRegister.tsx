/* eslint-disable no-unused-vars */
// material-ui

import { Register } from '@/api/auth';
import InputChangeHandler from '@/utils/InputChangeHandler';
import NotifyError from '@/utils/NotifyError';
import NotifySuccess from '@/utils/NotifySuccess';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormGroup, Row, Col, Input, Label, Button } from 'reactstrap';
import InputPasswordToggle from '../auth/InputPasswordToggle';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const AuthRegister = () => {

    const { t } = useTranslation();
    const router = useRouter();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: ''
    });
    const handleSubmit = () => {
        Register(data).then(response => {
            NotifySuccess('ثبت نام با موفقیت انجام شد.');
            router.push('/auth/Validation');
        })
            .catch(err => NotifyError(err));
    }

    const textAlign = router.locale === "fa" ? "text-right" : "text-left";
    return (
        <>
            <FormGroup dir="rtl">
                <Row>
                    <Col lg="6">
                        <FormGroup>
                            <Label className={`w-100 ${textAlign}`}>{t("form.name")}<span>*</span></Label>
                            <input
                                type="text"
                                className={`custom-input ${textAlign}`}
                                id="first_name"
                                name="first_name"
                                value={data.first_name} onChange={(e) => InputChangeHandler(e, data, setData)} />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <FormGroup>
                            <Label className={`w-100 ${textAlign}`}>{t("form.lastName")}<span >*</span>{' '}
                            </Label>
                            <input
                                type="text"
                                className={`custom-input ${textAlign}`}
                                id="last_name"
                                name="last_name"
                                value={data.last_name} onChange={(e) => InputChangeHandler(e, data, setData)} />
                        </FormGroup>
                    </Col>

                    <Col lg="12">
                        <FormGroup>
                            <Label className={`w-100 ${textAlign}`}>{t("form.email")}<span >*</span></Label>
                            <input
                                type="email"
                                className={`custom-input ${textAlign}`}
                                value={data.email}
                                id="email"
                                name="email"
                                dir="ltr"
                                style={{ textAlign: "left" }}
                                onChange={(e) => InputChangeHandler(e, data, setData)} />
                        </FormGroup>
                    </Col>
                    <Col lg="12">
                        <FormGroup>
                            <Label className={`w-100 ${textAlign}`}> {t("form.phoneNumber")}<span >*</span></Label>
                            <input
                                type="tel"
                                className={`custom-input ${textAlign}`}
                                value={data.phone_number}
                                id="phone_number"
                                name="phone_number"
                                dir="ltr"
                                style={{ textAlign: "left" }}
                                onChange={(e) => InputChangeHandler(e, data, setData)} />
                        </FormGroup>
                    </Col>
                    <Col lg="12">
                        <FormGroup>
                            <Label className={`w-100 ${textAlign}`}>{t("form.Password")}<span >*</span></Label>
                            <InputPasswordToggle
                                value={data.password}
                                id="password"
                                name="password"
                                onChange={(e) => InputChangeHandler(e, data, setData)} dir="ltr" />
                        </FormGroup>
                    </Col>
                    <Col lg="12">
                        <Label className={`w-100 ${textAlign}`}> {t("form.passwordConfirmation")}<span >*</span> </Label>
                        <FormGroup>
                            <InputPasswordToggle
                                value={data.password_confirmation}
                                id="password_confirmation"
                                name="password_confirmation" onChange={(e) => InputChangeHandler(e, data, setData)} dir="ltr" />
                        </FormGroup>
                        <small className={`login-save-password w-100 d-block ${textAlign}`}>
                            <Input type="checkbox"
                                style={{
                                    marginLeft: `${router.locale === "fa" ? ".5em" : "1em"}`,
                                    marginRight: `${router.locale === "fa" ? "1em" : ".5em"}`,
                                    float: `${router.locale === "fa" ? "right" : "left"}`,
                                    marginTop: "0"
                                }}
                            />
                            <span>{t("form.I agree to terms and conditions")}</span>
                        </small>
                    </Col>

                    <Col lg="12" className="my-3 d-flex justify-content-center">
                        <Button className="login-btn" onClick={() => { handleSubmit() }} >{t("form.register")}</Button>
                    </Col>
                    <Col>
                        <Link href="/">
                            <a className={`link-password ${textAlign}`}>
                                {router.locale === "fa" ?
                                    <b>{t("form.Already have an account?")} </b> :
                                    <span>{t("form.Already have an account?")} <b>  {t("form.login")} </b> </span>
                                }
                            </a>
                        </Link>
                    </Col>
                </Row>
            </FormGroup>
        </>
    );
};

export default AuthRegister;
