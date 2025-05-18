'use client';
import { Box, Typography, Chip } from '@mui/material';

const filters = ['New', 'Upcoming', 'For Sale'];

export const ProjectFilter = () => {
  return (
    <Box display="flex" gap={2} mb={1}>
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <Typography fontSize={20} fontWeight={600}>Projects</Typography>
        <Typography fontSize={12} color="#9CA3AF">(6 RESULTS)</Typography>
      </Box>

      <Box display="flex" gap={1}>
        {filters.map((filter, i) => (
          <Chip
            key={i}
            label={filter}
            sx={{
              px: 2,
              py: 0.5,
              fontWeight: 500,
              borderRadius: 999,
              backgroundColor: '#F1F5F9',
              color: '#111',
              fontSize: 14,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
