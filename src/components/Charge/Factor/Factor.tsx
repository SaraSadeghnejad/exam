import { Card, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const Factor = () => {
    const { t } = useTranslation();
    return (
        <Card sx={{ padding: '20px', height: "inherit", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} 
        className="bg-white-100 dark:bg-slate-900">
            <Typography sx={{ fontSize: "1.5em" }} fontWeight="bold" className=" dark:text-white text-slate-900" mb={3}>
                مهر ۱۴۰۱
            </Typography>

            <div className="w-80 lg:w-80 md:w-96 sm:w-80">
                <div className="d-flex justify-content-between w-100 mb-3">
                    <Typography sx={{ fontSize: '1.2em' }}  className=" dark:text-white text-slate-900">
                    {t("factor.cost type")}:
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} fontWeight="bold" color="#448BFF">
                        {t("factor.unit share")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-between w-100 mb-3">
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                    {t("factor.charge amount of the current month")}:
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} className="dark:text-white text-slate-900">
                        <b>۳،۵۰۰،۰۰۰</b>
                        {t("rial")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-between w-100 mb-3">
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                    {t("factor.unshared charges")}:
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                        <b>۴،۰۰۰،۰۰۰</b>
                        {t("rial")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-between w-100 mb-3">
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                    {t("factor.penalty for late charging")}:
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                        <b>۱۰۰،۰۰۰</b>
                        {t("rial")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-between w-100 mb-3 ">
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                    {t("factor.total")}:
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} className=" dark:text-white text-slate-900">
                        <b>۷،۶۰۰،۰۰۰</b>
                        {t("rial")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-between mb-3 w-auto py-2 px-4 bg-blue-500 rounded-full">
                    <Typography sx={{ fontSize: '1.2em' }} color="#fff">
                    {t("factor.the amount payable")}
                    </Typography>
                    <Typography sx={{ fontSize: '1.2em' }} color="#fff">
                        <b>۷،۶۰۰،۰۰۰</b>
                        {t("rial")}
                    </Typography>
                </div>

                <div className="d-flex justify-content-center w-100">
                    <button type="button" className="inline-block px-6 py-1 text-lg border-2 border-green-500 text-green-500 font-medium  rounded-full">
                    {t("factor.payment")}
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default Factor;