'use client';
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

import heroImg from '@/assets/hero1.webp';
import theme, { centerContent } from '@/styles/theme';

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="hero"
        sx={{
          ...centerContent,
          maxWidth: '100dvw',
          minHeight: '75dvh',
        }}
      >
        <Container
          sx={{
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: { xs: 'center' },
          }}
        >
          <Grid container columnSpacing={3} spacing={2}>
            <Grid
              md={6}
              xs={12}
              sx={{
                ...centerContent,
              }}
            >
              <Box
                sx={{
                  ...centerContent,
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: 3,
                }}
              >
                <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
                  A melhor creche escola de Anchieta
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: 'center',
                    margin: '10px auto 20px',
                    color: 'button.secondary',
                    fontFamily: 'Patrick Hand',
                    fontWeight: '700',
                  }}
                >
                  Como matricular seu pequenino?
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    p: '5px 20px',
                    fontSize: '1.5em',
                    '&:hover': { backgroundColor: 'button.secondary' },
                  }}
                >
                  Saiba mais
                </Button>
              </Box>
            </Grid>
            <Grid
              md={6}
              xs={12}
              sx={{
                ...centerContent,
              }}
            >
              <Box sx={{ display: { md: 'initial', xs: 'none' } }}>
                <Image src={heroImg} alt="Imagem auxiliar da seção Hero" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
