import { Card } from "@mui/material";
import Message from "./Message";
import { useTranslation } from 'react-i18next';

const MessageList = () => {
    const { t } = useTranslation();

    return (
        <Card sx={{ padding: '20px' , display: 'flex', flexDirection: 'column', gap: '15px'}} className=" dark:bg-slate-900 bg-white-100">
            <Message name={t('names.Hossein Ahmadpanah')} text="امیر عزیز سلام! پیگیری کرده و نتیجه را متعاقبا اعلام نمایید ..."/>
            <Message name={t('names.Mohammad Shabani')} text="با سلام و درود خدمت مهندس خرمیان عزیز با توجه به اختلال ... ..."/>
            <Message name={t('names.Hamed Assar')} text="امیر عزیز سلام! پیگیری کرده و نتیجه را متعاقبا اعلام نمایید ..."/>
            <Message name={t('names.AmirHossein Khorammian')} text="امیر عزیز سلام! پیگیری کرده و نتیجه را متعاقبا اعلام نمایید ..."/>
        </Card>
    );
}

export default MessageList;