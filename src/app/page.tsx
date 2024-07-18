import Button from '@/components/Button';
import Input from '@/components/Input';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { LogoIcon } from '../../public/icons';
import Link from 'next/link';

type Props = {};

function LoginPage({}: Props) {
  return (
    <Container
      sx={{
        height: '100dvh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Grid container sx={{ maxWidth: '450px', padding: '20px' }}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          rowGap={2}
          mb={4}
        >
          <LogoIcon
            style={{
              width: '70px',
              height: '70px',
            }}
          />
          <Typography variant="h2">Entre no OrangeX</Typography>
        </Grid>
        <Grid container rowGap={2}>
          <Input id="email" type="email" label="E-mail" variant="outlined" />
          <Input
            id="password"
            type="password"
            label="Senha"
            variant="outlined"
          />
          <Button fullWidth={true} text="Entrar" variant="primaryContained" />
        </Grid>
        <Grid container flexWrap="nowrap" justifyContent="space-between" mt={6}>
          <Link href={''}>
            <Button text="Esqueceu a senha?" variant="text" />
          </Link>

          <Link href={'/signup'}>
            <Button text="Criar uma conta" variant="text" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
