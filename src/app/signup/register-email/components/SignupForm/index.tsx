'use client';

import { Alert, Grid, Typography } from '@mui/material';
import React from 'react';
import { LogoIcon } from '../../../../../../public/icons';
import Input from '@/components/Input';
import InputSelect from '@/components/InputSelect';
import useInputSelectOptionsData from '@/components/InputSelect/InputSelectOptions.hooks';
import Button from '@/components/Button';

type Props = {};

function SignupForm({}: Props) {
  const {
    day,
    month,
    year,
    days,
    months,
    years,
    setDay,
    error,
    isError,
    handleMonthChange,
    handleYearChange,
  } = useInputSelectOptionsData();
  return (
    <Grid maxWidth={600}>
      <Grid
        container
        flexDirection="column"
        alignItems="flex-start"
        mb={4}
        rowGap={2}
      >
        <Grid item container alignItems="center" justifyContent="center">
          <LogoIcon
            style={{
              width: '60px',
              height: '60px',
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h3">Criar Conta</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <Input id="name" type="text" label="Nome" variant="outlined" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Input id="email" type="email" label="E-mail" variant="outlined" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Input
            id="password"
            type="password"
            label="Senha"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Input id="user" type="text" label="Usuário" variant="outlined" />
        </Grid>
      </Grid>
      <Grid mt={2} mb={2}>
        <Typography mb={1} variant="h6">
          Data de nascimento
        </Typography>
        <Typography variant="body1" sx={{ opacity: '60%' }}>
          Isso não será exibido publicamente. Confirme sua própria idade, mesmo
          se esta conta for de empresa, de um animal de estimação ou outros.
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputSelect
            label="Mês"
            options={months}
            value={month}
            onChange={handleMonthChange}
            error={isError}
          />
        </Grid>
        <Grid item xs={12} sm>
          <InputSelect
            label="Dia"
            options={days}
            value={day}
            onChange={(_, newValue) => setDay(newValue)}
            disabled={!days.length}
            error={isError}
          />
        </Grid>
        <Grid item xs={12} sm>
          <InputSelect
            label="Ano"
            options={years}
            value={year}
            onChange={handleYearChange}
            error={isError}
          />
        </Grid>
      </Grid>
      {!!isError && (
        <Grid mt={1}>
          <Alert severity="error">
            Precisa ser maior de idade para criar uma conta
          </Alert>
        </Grid>
      )}

      <Grid mt={2}>
        <Button
          text="Criar conta"
          variant="primaryContained"
          fullWidth={true}
        />
      </Grid>
    </Grid>
  );
}

export default SignupForm;
