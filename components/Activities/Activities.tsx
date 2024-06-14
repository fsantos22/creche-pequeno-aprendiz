'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/system';
import Image from 'next/image';

import activitiesImg from '@/assets/activitiesImg.webp';
import ballIcon from '@/assets/icons/ball.svg';
import classIcon from '@/assets/icons/class.svg';
import clockIcon from '@/assets/icons/clock.svg';
import flagIcon from '@/assets/icons/flag.svg';
import paletteIcon from '@/assets/icons/palette.svg';
import tvIcon from '@/assets/icons/tv.svg';
import theme, { centerContent } from '@/styles/theme';
import { colorSchema } from '@/utils/constraints';

const activities = [
  { text: 'Área de jogos', icon: ballIcon },
  { text: 'Ensino integral', icon: clockIcon },
  { text: 'Sala de atividades', icon: flagIcon },
  { text: 'Aulas diversificadas', icon: classIcon },
  { text: 'Música e Arte', icon: paletteIcon },
  { text: 'Multimídia', icon: tvIcon },
];

export default function Activities() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="activities"
        sx={{
          ...centerContent,
          backgroundColor: '#FFF',
        }}
      >
        <Grid container sx={{ ...centerContent, maxWidth: '1200px', p: 2 }}>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                ...centerContent,
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <Image
                src={activitiesImg}
                alt="Imagem auxiliar da seção Sobre. 3 crianças caminhando em um fundo branco"
                layout="responsive"
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                ...centerContent,
                flexDirection: 'column',
                padding: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  padding: 2,
                  marginBottom: 3,
                  fontFamily: 'Caveat',
                  fontWeight: 700,
                  color: colorSchema.purple,
                }}
              >
                Atividades
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  paddingBottom: 2,
                }}
              >
                O ensino não precisa se limitar a livros didáticos e
                quadros-negros. Com nossas atividades escolares divertidas para
                crianças, o aprendizado na escola se torna um exercício
                interessante e agradável, ajudando a desenvolver a criatividade,
                a imaginação, a capacidade de raciocínio e as habilidades
                sociais de seu filho.
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Grid container sx={{ ...centerContent, gap: 1 }}>
                  {activities.map((item, index) => {
                    return (
                      <Grid
                        key={index}
                        xl
                        sx={{
                          display: 'flex',
                          alingItems: 'center',
                          minWidth: '245px',
                        }}
                      >
                        <Box
                          sx={{
                            ...centerContent,
                            gap: 2,
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt="Imagem auxiliar da atividade da seção"
                            width={45}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: 'Kalam',
                              color: colorSchema.purple,
                              fontWeight: 600,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
