import { Validation } from '@/api/auth';
import { useState } from 'react';
import { FormGroup, Col, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';


const AuthValidation = () => {
  const [otpBoxValue, setOtpBoxValue] = useState({});
  const onKeyPress = (event) => {
    if (event.key === 'Backspace' && event.target.value === '' || event.target.previousSibling === null) {
      event.target.previousSibling.focus()
    }
  }
  const handleOtpInputBox = (event, index) => {
    setOtpBoxValue({
      ...otpBoxValue,
      [`input-${index}`]: event.target.value
    });


    if (event.target.nextSibling)
      event.target.nextSibling.focus();
    if (event.target.value === '' && event.target.previousSibling === null)
      event.target.parentNode.firstChild.focus()
  }
  const submitHandler = () => {
    Validation({
      otp_number: Object.values(otpBoxValue).join("")
    }).then(response => {
      // NotifySuccess("کارت هدیه با موفقیت اعمال شد.");
    }).catch(err => {
      // NotifyError(err);
      // toast.error("کد وارد شده موجود نیست.")
    });
  }
  const { t } = useTranslation();

  return (
    <>
      <FormGroup dir="ltr" style={{ display: "block", textAlign: "center" }} className="w-100">
        <div id="inputs-group-container">
          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            autoFocus={true}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 1)}/>

          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            onKeyUp={onKeyPress}
            onKeyDown={onKeyPress}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 2)} />

          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            onKeyUp={onKeyPress}
            onKeyDown={onKeyPress}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 3)} />

          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            onKeyUp={onKeyPress}
            onKeyDown={onKeyPress}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 4)} />

          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            onKeyUp={onKeyPress}
            onKeyDown={onKeyPress}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 5)} />

          <input type="text" className="otp-input-group form-control"
            maxLength={1}
            onKeyUp={onKeyPress}
            onKeyDown={onKeyPress}
            onKeyPress={(e) => /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأآ۱۲۳۴۵۶۷۸۹ءًٌٍَُِّ]+$/.test(e.key) && e.preventDefault()}
            onChange={e => handleOtpInputBox(e, 6)} />
        </div>

        <Col sm="8" className='mx-auto d-flex justify-content-center'>
          <Button className="login-btn" onClick={() => { submitHandler() }} >{t("form.submit")}</Button>
        </Col>
        
        <Col>
          <a href="" className="link-password">
            {t('form.resend the code')}
          </a>
        </Col>
      </FormGroup>
    </>
  );
};

export default AuthValidation;
