'use client';
import React from 'react';
import { Box, Paper, styled, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

import highlightsBg from '@/assets/highlightsBg.webp';
import theme, { centerContent } from '@/styles/theme';

const MapContainer = styled('div')({
  width: '400px',
  height: '400px',
  position: 'relative',

  '& iframe': {
    height: '100%',
    width: '100%',
    border: '0',
  },
});

export default function Location() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="location"
        sx={{
          ...centerContent,
          position: 'relative',
          backgroundColor: '#55b06f',
          minHeight: '500px',
        }}
      >
        <Image
          src={highlightsBg}
          alt="imagem de fundo da seção inicial"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Grid
          container
          sx={{
            ...centerContent,
            justifyContent: 'space-evenly',
            width: '1200px',
            p: 5,
          }}
        >
          <Grid xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                padding: 2,
                marginBottom: 2,
                fontFamily: 'Caveat',
                fontWeight: 700,
                color: 'button.secondary',
              }}
            >
              Onde estamos
            </Typography>
            <Paper
              sx={{
                ...centerContent,
                flexDirection: 'column',
                gap: 2,
                padding: 2,
              }}
            >
              <Typography variant="h5">
                Creche Escola Pequeno Aprendiz
              </Typography>
              <Typography variant="h6" sx={{ borderBottom: '3px solid' }}>
                Endereço
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Estr. do Engenho Novo, 530 - Anchieta <br /> Rio de Janeiro - RJ{' '}
                <br />
                21620-242
              </Typography>
              <Typography variant="h6" sx={{ borderBottom: '3px solid' }}>
                Telefone/whatsapp
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Typography variant="body1">(21) 3339-4029</Typography>
                <Typography variant="body1">(21) 98693-6046</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                ...centerContent,
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <MapContainer>
                <iframe src="https://www.google.com/maps/embed/v1/place?q=CRECHE+ESCOLA+PEQUENO+APRENDIZ+-+Estrada+do+Engenho+Novo+-+Anchieta,+Rio+de+Janeiro+-+State+of+Rio+de+Janeiro,+Brazil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
              </MapContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
