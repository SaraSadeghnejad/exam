import { useRouter } from 'next/router';
import { FormControl, MenuItem, Select } from '@mui/material';

const SelectLanguage = () => {
    const router = useRouter();
    const handleLocaleChange = (event) => {
        const value = event.target.value;
        router.push(router.route, router.asPath, {
            locale: value,
        });
    };

    
    return (
        <div className='d-flex justify-content-center select-lang__input'>
            <FormControl sx={{ m: 1, minWidth: 120}} size="small" >
                <Select
                    label={router.locale}
                    value={router.locale}
                    onChange={handleLocaleChange}
                    className="text-slate-900 dark:text-white"
                >
                    <MenuItem value="fa">فارسی &emsp;🇮🇷</MenuItem>
                    <MenuItem value="en">English&emsp;🇬🇧</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}

export default SelectLanguage;