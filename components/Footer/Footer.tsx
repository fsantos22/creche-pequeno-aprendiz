'use client';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

import { centerContent } from '@/styles/theme';
import { colorSchema } from '@/utils/constraints';

const linkStyles = {
  textDecoration: 'none',
  color: '#fff',
  '&:hover': { color: colorSchema.purple },
  borderBottom: '2px solid',
};

const SLink = styled(Link)(linkStyles);

function Footer() {
  return (
    <Box
      sx={{
        ...centerContent,
        backgroundColor: colorSchema.orange,
        height: '50px',
        color: '#fff',
      }}
    >
      <Typography>
        Desenvolvido por{' '}
        <SLink href="https://www.linkedin.com/in/22fsantos/" target="_blank">
          Fabio Dev
        </SLink>
      </Typography>
    </Box>
  );
}
export default Footer;
