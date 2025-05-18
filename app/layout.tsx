'use client'

import '@/styles/globals.css';
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import 'leaflet/dist/leaflet.css';
import { CssBaseline } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Header } from '@/components/Header';
import { AuthModal } from '@/components/AuthModal';
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/lib/theme'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <html lang="en">
      <title>Bolsterup</title>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header onAuthOpen={() => setAuthOpen(true)} />
          {children}
          <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
        </ThemeProvider>
      </body>
    </html>
  );
}