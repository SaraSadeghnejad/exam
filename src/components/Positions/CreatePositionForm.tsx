import React from 'react';
import { Button,Alert, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
type Props = {}

function CreatePositionForm({ }: Props) {
    const { t } = useTranslation();
    return (
        <>
            <Alert icon={<WarningRoundedIcon color='warning' />} className='mb-5' severity="warning">{t('alertMessage.To create a position, you must register the relevant unit, then create a position')}</Alert>

            <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <TextField
                        fullWidth
                        type="text"
                        label={t('form.Position name')}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <TextField
                        fullWidth
                        type="text"
                        label={t('form.parent unit')}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <TextField
                        fullWidth
                        type="text"
                        label={t('form.parent position')}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container className='my-3' alignItems="center" justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <FormControl fullWidth>
                        <RadioGroup
                            row
                            className='align-items-center justify-content-between w-100'
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormLabel id="demo-row-radio-buttons-group-label">{t('form.status')}</FormLabel>
                            <Grid>
                                <FormControlLabel value="true" control={<Radio />} label={t('form.Active')} />
                                <FormControlLabel value="false" control={<Radio />} label={t('form.Inactive')} />
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>


                <Grid container className="my-4" alignItems="center" justifyContent={"center"}>
                    <Button endIcon={<AddBoxRoundedIcon  />} variant="contained">{t('form.Create Position')}</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default CreatePositionForm