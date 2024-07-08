'use client';

import Button from '@/components/Button';
import React from 'react';
import { Apple, Google } from '../../../../../public/icons';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import CustomLink from '@/components/Link';

type Props = {};

function SignupOptions({}: Props) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container maxWidth={450} padding={isSmallDevice ? 0 : 4}>
      <Grid item container mb={4}>
        <Typography variant={isSmallDevice ? 'h2' : 'h1'}>
          Acontecendo agora
        </Typography>
        <Typography variant="h3">Junte-se ao OrangeX hoje</Typography>
      </Grid>
      <Grid item container maxWidth={400} direction="column" rowGap={2}>
        <Button
          text="Entre com o Google"
          variant="outlinedIcon"
          icon={<Google />}
          disabled
        />
        <Button
          text="Entre com a Apple"
          variant="outlinedIcon"
          icon={<Apple />}
          disabled
        />
        <Link href="signup/register-email">
          <Button text="Entrar com e-mail" variant="outlined" />
        </Link>
      </Grid>
      <Grid item container mt={10}>
        <Typography variant="body2">
          {'Ao entrar você concorda com os '}
          <CustomLink text="Termos de Serviço" href="" variant="body2" />
          {' e '}
          <CustomLink text="Política de Privacidade" href="" variant="body2" />
          {', incluindo o '}
          <CustomLink text="Uso de Cookie" href="" variant="body2" />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SignupOptions;
