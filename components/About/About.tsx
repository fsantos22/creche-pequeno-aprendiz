'use client';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import aboutImg from '@/assets/aboutImg.jpeg';
import theme, { centerContent } from '@/styles/theme';
import { colorSchema, whatsappLink } from '@/utils/constraints';

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="about"
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
                src={aboutImg}
                alt="Imagem auxiliar da seção Sobre. 3 crianças caminhando em um fundo branco"
                layout="responsive"
              />
              <Typography variant="subtitle1">
                Entre em contato conosco!
              </Typography>
              <Box
                sx={{
                  ...centerContent,
                  flexDirection: { sm: 'row', xs: 'column' },
                }}
              >
                <Link href="tel:+552133394029" replace={true}>
                  <Button
                    sx={{
                      fontSize: '2em',
                      color: colorSchema.orange,
                      borderRadius: 5,
                      p: '0 20px',
                      '&:hover': {
                        color: 'red',
                        backgroundColor: 'rgba(227, 144, 20, 0.4)',
                        transition: '1s',
                      },
                    }}
                  >
                    <CallIcon fontSize="large" />
                    {'(21) 3339-4029'}
                  </Button>
                </Link>
                <Link href={whatsappLink} target="_blank" replace={true}>
                  <Button
                    sx={{
                      fontSize: '2em',
                      color: colorSchema.orange,
                      borderRadius: 5,
                      p: '0 20px',
                      '&:hover': {
                        color: 'green',
                        backgroundColor: 'rgba(86,169,4,0.4)',
                        transition: '1s',
                      },
                    }}
                  >
                    <WhatsAppIcon fontSize="large" />
                    {'(21) 98693-6046'}
                  </Button>
                </Link>
              </Box>
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
                Sobre nós
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  paddingBottom: 2,
                }}
              >
                Na Creche Escola Pequeno Aprendiz, somos apaixonados por criar
                ambientes escolares excepcionais que inspiram e promovem o
                desenvolvimento integral das crianças. Acreditamos que cada
                detalhe do espaço de aprendizado influencia positivamente o
                desenvolvimento cognitivo e emocional dos pequenos. Nossas
                instalações são cuidadosamente planejadas para oferecer áreas de
                recreação internas e externas, ateliês de arte, áreas dedicadas
                à tecnologia e até piscinas projetadas especialmente para os
                mais jovens. Cada espaço é pensado para estimular a curiosidade,
                a criatividade e o bem-estar das crianças.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                }}
              >
                Nosso compromisso é proporcionar uma educação infantil de
                altíssima qualidade, garantindo que todas as crianças sob nossos
                cuidados tenham acesso a um ensino internacional de excelência.
                Nossos programas são desenvolvidos para atender às necessidades
                individuais de cada criança, promovendo um aprendizado lúdico e
                significativo. A Creche Escola Pequeno Aprendiz é um lugar onde
                as crianças se sentem seguras, amadas e motivadas a explorar o
                mundo ao seu redor, construindo as bases para um futuro
                brilhante.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
