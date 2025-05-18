
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { SearchInput } from './SearchInput';

interface HeaderProps {
  onAuthOpen: () => void;
}

export const Header = ({ onAuthOpen }: HeaderProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = (
    <Box display="flex" gap={3} alignItems="center">
      <Button
        component={Link}
        href="/projects"
        sx={{
          fontWeight: 600,
          color: '#204C5B',
          fontSize: 16,
          textTransform: 'capitalize',
        }}
      >
        Projects
      </Button>
      <Button
        component={Link}
        href="/products"
        sx={{
          fontWeight: 600,
          color: '#204C5B',
          fontSize: 16,
          textTransform: 'capitalize',
        }}
      >
        Products
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: '#fff' }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 8 },
          pt: 2,
          pb: isHome ? 2 : 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box display="flex" alignItems="center" gap={4}>
          <Box fontWeight={900} fontSize={28} color="#204C5B">
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: '#204C5B',
              fontWeight: 900,
              fontSize: '28px',
            }}
          >
            LOGO
          </Link>

          </Box>

          {!isMobile && isHome && (
            <>
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#E0E0E0' }} />
              {navItems}
            </>
          )}

          {!isMobile && !isHome && (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginLeft={'550px'}>
              {navItems}
            </Box>
          )}
        </Box>

        {!isMobile ? (
          <Box display="flex" gap={1} alignItems="center">
          <Button
            onClick={onAuthOpen}
            variant="outlined"
            sx={{
              borderRadius: 50,
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              fontSize: 16,
              width: 142,
              color: '#204C5B',
              border: '2px solid #204C5B',
              py: '6px',
            }}
          >
            Log in
          </Button>
          <Button
            onClick={onAuthOpen}
            variant="contained"
            sx={{
              borderRadius: 50,
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              fontSize: 16,
              width: 190,
              backgroundColor: '#204C5B',
              '&:hover': {
                backgroundColor: '#1f4f5d',
              },
              py: '8px',
            }}
          >
            Create account
          </Button>
        </Box>
        ) : (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Menu />
          </IconButton>
        )}
      </Toolbar>

      {!isMobile && !isHome && (
        <Box display="flex" justifyContent="center" mt={2} px={2} pb={2}>
            <SearchInput placeholder="Search for..." sx={{
              px: 2,
              py: 1,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 0 0 1px #eee',
              width: '660px',
              backgroundColor: '#fff',
            }}/>
        </Box>
      )}

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem component={Link} href="/projects">
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem component={Link} href="/products">
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem onClick={onAuthOpen}>
              <ListItemText primary="Log in / Create account" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
