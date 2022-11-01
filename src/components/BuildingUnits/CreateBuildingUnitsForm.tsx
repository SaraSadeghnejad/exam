import { Button,Collapse, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, List, ListItem, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormTitle from '../Title/FromTitle';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

type Props = {}

function CreateBuildingUnitsForm({ }: Props) {
  const [building, setBuilding] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setBuilding(event.target.value as string);
  };
  const { t } = useTranslation();
  const router = useRouter();
  const [haveTenant, setHaveTenant] = useState(false);

  const handleTenant = () => {
    setHaveTenant(true);
  };
  const handleNotTenant = () => {
    setHaveTenant(false);
  };
  return (
    <>
      <FormTitle title={t("formTitles.Building specifications")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">{t('form.Building')}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={building}
              label={t('form.Building')}
              onChange={handleChange}
            >
              <MenuItem value={10}>شبنم</MenuItem>
              <MenuItem value={20}>نور</MenuItem>
              <MenuItem value={30}>شقایق</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="text"
            label={t('form.Unit Name')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.floor')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.Unit area')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.Number of bedrooms')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <FormControl fullWidth>
            <RadioGroup
              row
              className='align-items-center justify-content-between w-100'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel id="demo-row-radio-buttons-group-label">{t('form.Warehouse')}</FormLabel>
              <Grid>
                <FormControlLabel value="true" control={<Radio />} label={t('form.True')} />
                <FormControlLabel value="false" control={<Radio />} label={t('form.False')} />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <FormControl fullWidth>
            <RadioGroup
              row
              className='align-items-center justify-content-between w-100'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel id="demo-row-radio-buttons-group-label">{t('form.Balcony')}</FormLabel>
              <Grid>
                <FormControlLabel value="true" control={<Radio />} label={t('form.True')} />
                <FormControlLabel value="false" control={<Radio />} label={t('form.False')} />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <TextField
            fullWidth
            type="number"
            label={t('form.Number of parking lots')}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <FormTitle title={t("formTitles.Tenant details")} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <FormControl fullWidth>
            <RadioGroup
              row
              className='align-items-center justify-content-between w-100'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel id="demo-row-radio-buttons-group-label">{t('form.Do you have a tenant?')}</FormLabel>
              <Grid>
                <FormControlLabel value="true" control={<Radio />} onClick={handleTenant} label={t('form.True')} />
                <FormControlLabel value="false" control={<Radio />} onClick={handleNotTenant} label={t('form.False')} />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Collapse in={haveTenant} timeout="auto" unmountOnExit>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              type="text"
              label={t('form.name')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              type="text"
              label={t('form.lastName')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              type="tel"
              label={t('form.Phone')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              type="tel"
              label={t('form.phone number')}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Collapse>
      <Grid item xs={12} className="my-4">
        <Button endIcon={<AddBoxRoundedIcon  />} variant="contained">{t('form.Unit Registration')}</Button>
      </Grid>
    </>
  );
}

export default CreateBuildingUnitsForm