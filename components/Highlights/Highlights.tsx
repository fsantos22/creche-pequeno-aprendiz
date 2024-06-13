'use client';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

import highlightsBg from '@/assets/highlightsBg.webp';
import ballColorIcon from '@/assets/icons/ballColor.svg';
import englishColorIcon from '@/assets/icons/englishColor.svg';
import paletteColorIcon from '@/assets/icons/paletteColor.svg';
import theme, { centerContent } from '@/styles/theme';
import { colorSchema } from '@/utils/constraints';

const cardsContent = [
  {
    color: 'green',
    img: ballColorIcon,
    title: 'Jogos Esportivos',
    text: 'Há muitos jogos esportivos divertidos para crianças que não exigem equipes nem envolvem muitos equipamentos.',
  },
  {
    color: 'yellow',
    img: englishColorIcon,
    title: 'Aulas de Inglês',
    text: 'As histórias, os jogos, os testes e as planilhas apresentados aqui são ótimas maneiras de aprender inglês com diversão.',
  },
  {
    color: 'blue',
    img: paletteColorIcon,
    title: 'Música e Arte',
    text: 'A música e a arte estão moldando e aprimorando habilidades importantes da mesma forma que a matemática e outras ciências.',
  },
];

function Highlights() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="highlights"
        sx={{
          ...centerContent,
          position: 'relative',
          minHeight: '450px',
          backgroundColor: colorSchema.purple,
        }}
      >
        <Image
          src={highlightsBg}
          alt="imagem de fundo da seção inicial"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Grid container>
          {cardsContent.map((card, index) => {
            return (
              <Grid
                key={index}
                xs={12}
                md={6}
                lg={4}
                sx={{ ...centerContent, padding: 2 }}
              >
                <Box
                  sx={{
                    ...centerContent,
                    flexDirection: 'column',
                    width: '330px',
                    height: '340px',
                    gap: 2,
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  <Paper sx={{ p: 2 }}>
                    <Image
                      src={card.img}
                      alt="imagem do card da seção de destaques"
                      width={145}
                      height={145}
                    />
                  </Paper>
                  <Typography
                    variant="h4"
                    sx={{ borderBottom: `3px solid ${card.color}` }}
                  >
                    {card.title}
                  </Typography>
                  <Typography>{card.text}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Highlights;
