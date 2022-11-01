import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import FormTitle from '../Title/FromTitle';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

type Props = {}

function CreateBuildingForm({ }: Props) {

  const { t } = useTranslation();
  return (
    <>
      <FormTitle title={t("formTitles.Building specifications")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="text"
            label={t('form.Building type')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="text"
            label={t('form.Building name')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.floors')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.units')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label={t('form.address')}
            multiline
            rows={5}
            variant="outlined"
          />
        </Grid>

        <Grid container className="my-4" alignItems="center" justifyContent={"center"}>
          <Button endIcon={<AddBoxRoundedIcon  />} variant="contained">{t('form.Building Registration')}</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateBuildingForm