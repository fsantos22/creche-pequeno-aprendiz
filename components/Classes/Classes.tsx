'use client';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/system';
import Image from 'next/image';

import highlightsBg from '@/assets/highlightsBg.webp';
import babyColorIcon from '@/assets/icons/babyColor.svg';
import boyColorIcon from '@/assets/icons/boyColor.svg';
import girlColorIcon from '@/assets/icons/girlColor.svg';
import theme, { centerContent } from '@/styles/theme';
import { colorSchema } from '@/utils/constraints';

const cardsContent = [
  {
    color: 'green',
    img: babyColorIcon,
    title: 'Creche',
    text: 'Descrição curta',
  },
  {
    color: 'yellow',
    img: boyColorIcon,
    title: 'Fundamental I',
    text: 'Descrição curta',
  },
  {
    color: 'blue',
    img: girlColorIcon,
    title: 'Fundamental II',
    text: 'Descrição curta',
  },
];

function Classes() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="classes"
        sx={{
          ...centerContent,
          position: 'relative',
          minHeight: '450px',
          backgroundColor: colorSchema.orange,
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

export default Classes;
