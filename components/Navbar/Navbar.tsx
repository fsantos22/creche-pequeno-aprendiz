'use client';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled, ThemeProvider } from '@mui/system';
import Link from 'next/link';

import theme from '@/styles/theme';

const whatsappLink = 'https://wa.me/message/NBYCE4EFHSNHB1';
const drawerWidth = '100dvw';
const toolbarWidth = '1200px';
const navFontSize = '1.2em';
const navItems = [
  { text: 'Início', target: '#hero' },
  { text: 'Destaques', target: '#highlights' },
  { text: 'Sobre', target: '#about' },
  { text: 'Turmas', target: '#classes' },
  { text: 'Atividades', target: '#activities' },
  { text: 'Novidades', target: '#news' },
  { text: 'Onde estamos', target: '#location' },
];
import { colorSchema } from '@/utils/constraints';

const linkStyles = {
  textDecoration: 'none',
  fontSize: navFontSize,
  fontWeight: 700,
  color: colorSchema.purple,
  '&:hover': { color: colorSchema.orange },
};
const SLink = styled(Link)(linkStyles);

const contactButton = (
  <Link href={whatsappLink} target="_blank" replace={true}>
    <Button
      variant="contained"
      sx={{
        fontSize: navFontSize,
        '&:hover': { backgroundColor: colorSchema.purple },
      }}
    >
      Contato
    </Button>
  </Link>
);

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}
function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as React.ReactElement}
    </Slide>
  );
}

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: colorSchema.purple,
        }}
      >
        MENU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <SLink key={item.text} href={item.target} replace={true}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </SLink>
        ))}
        {contactButton}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            position="fixed"
            sx={{
              backgroundColor: '#FFF',
              color: colorSchema.purple,
              display: 'flex',
            }}
          >
            <Toolbar sx={{ justifyContent: { sm: 'center', xs: 'flex-end' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: { sm: 'flex', xs: 'none' },
                  alignItems: 'center',
                  width: toolbarWidth,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                    fontSize: navFontSize,
                    fontWeight: 700,
                    color: colorSchema.purple,
                  }}
                >
                  LOGO
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <>
                    {navItems.map((item) => (
                      <Link key={item.text} href={item.target}>
                        <Button
                          sx={{
                            ...linkStyles,
                          }}
                        >
                          {item.text}
                        </Button>
                      </Link>
                    ))}
                  </>
                  {contactButton}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
