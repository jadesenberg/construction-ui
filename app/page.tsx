'use client';

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';
import { SearchInput } from '@/components/SearchInput';

const World = dynamic(() => import('@/components/Globe').then(mod => mod.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 1,
  globeColor: '#FFFFFF',
  showAtmosphere: true,
  atmosphereColor: '#000',
  atmosphereAltitude: 0.1,
  emissive: '#000',
  emissiveIntensity: 0.1,
  shininess: 2,
  polygonColor: '#000',
  ambientLight: '#e7e7e7',
  directionalLeftLight: '#e7e7e7',
  directionalTopLight: '#e7e7e7',
  pointLight: '#FFF',
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ['#e35315', '#e35315', '#e35315'];

const arcs = Array.from({ length: 42 }, (_, i) => ({
  order: i + 1,
  startLat: Math.random() * 180 - 90,
  startLng: Math.random() * 360 - 180,
  endLat: Math.random() * 180 - 90,
  endLng: Math.random() * 360 - 180,
  arcAlt: Math.random() * 0.6 + 0.1,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        pt: 10,
        px: 2,
      }}
    >
      <Typography fontWeight={500} fontSize={24} color="#204C5B">
        Search, Connect, and Build
      </Typography>

      <Typography
        fontWeight={600}
        fontSize={{ xs: 28, md: 52 }}
        mt={1}
      >
        Discover Global Construction Opportunities
      </Typography>

      <SearchInput
        placeholder="Search for new construction projects in your area"
        sx={{
          px: 2,
          py: 1,
          mt: 4,
          borderRadius: 999,
          boxShadow: '0 0 0 1px #E5E7EB',
          width: isMobile ? '100%' : 800,
          maxWidth: '90vw',
        }}
      />

      <Box width="100%" height={isMobile ? 400 : 700} mt={6}>
        <World globeConfig={globeConfig} data={arcs} />
      </Box>
    </Box>
  );
}
