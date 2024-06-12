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
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link'

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

const contactButton = (
  <Link href={whatsappLink} target="_blank" replace={true}>
    <Button
      variant="contained"
      sx={{
        fontSize: navFontSize,
        '&:hover': { backgroundColor: 'button.secondary' },
      }}
    >
      Contato
    </Button>
  </Link>
);

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
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
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List>
        <>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link
                  href={item.target}
                  replace={true}
                >
                    <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </>
        {contactButton}
      </List>
    </Box>
  );

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            position="fixed"
            sx={{ backgroundColor: '#FFF', color: '#7e57c2' }}
          >
            <Toolbar
              sx={{
                display: { xs: 'flex' },
                justifyContent: 'center',
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: 'flex',
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
                            fontSize: navFontSize,
                            fontWeight: 700,
                            color: 'button.secondary',
                            '&:hover': { color: 'button.primary' },
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
        <Offset />
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
