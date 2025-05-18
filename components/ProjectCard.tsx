'use client';
import { Box, Typography, Avatar, Chip, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Heart, Share2, MapPin, Building2, CheckCircle, Loader2 } from 'lucide-react';

export interface ProjectCardProps {
  name: string;
  status: 'In Progress' | 'Completed';
  company: string;
  location: string;
  type: string;
}

export const ProjectCard = ({ name, status, company, location, type }: ProjectCardProps) => {
  const isCompleted = status === 'Completed';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : 290,
      }}
    >
      <Box
        sx={{
          height: 170,
          background: '#9EADC1',
          px: 2,
          pt: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Chip
          icon={
            isCompleted ? (
              <CheckCircle size={14} style={{ marginRight: 4 }} />
            ) : (
              <Loader2 size={14} style={{ marginRight: 4 }} />
            )
          }
          label={status}
          size="small"
          sx={{
            backgroundColor: isCompleted ? '#E6F4EA' : '#EAEAFD',
            color: isCompleted ? '#1E7B50' : '#4D55C7',
            fontWeight: 600,
            fontSize: 13,
            height: 35,
            borderRadius: 999,
            px: 0.1,
          }}
        />
        <Box display="flex" gap={1}>
          <IconButton size="small" sx={{ backgroundColor: '#fff', p: '10px' }}>
            <Share2 size={16} color="#4B5563" />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: '#fff', p: '10px' }}>
            <Heart size={16} color="#4B5563" />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          height: 85,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.19) 15.07%, rgba(0, 0, 0, 0.40) 32.07%, #000 100%)',
          px: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mt: -10,
        }}
      >
        <Box mt={1.5} display="flex" gap={1} alignItems="center">
          <Avatar src="https://i.pravatar.cc/22" sx={{ width: 35, height: 35 }} />
          <Typography fontSize={15} fontWeight={600} color="#fff">
            {company}
          </Typography>
        </Box>
      </Box>

      <Box px={2} py={2}>
        <Typography fontSize={15} fontWeight={600} color="#111" mb={0.5}>
          {name}
        </Typography>
        <Box display="flex" alignItems="center" gap={0.5} mb={1}>
          <MapPin size={14} color="#6B7280" />
          <Typography fontSize={13} color="#6B7280">
            {location}
          </Typography>
        </Box>
        <Chip
          label={
            <Box display="flex" gap={1} alignItems="center">
              <Building2 size={14} color="#6B7280" />
              {type}
            </Box>
          }
          size="small"
          sx={{
            backgroundColor: '#D8F3EC',
            color: '#1C5B4F',
            fontWeight: 500,
            fontSize: 12,
            height: 30,
            borderRadius: 999,
            px: 1.5,
          }}
        />
      </Box>
    </Box>
  );
};
