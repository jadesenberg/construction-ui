'use client';

import dynamic from 'next/dynamic';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProjectCard, ProjectCardProps } from '@/components/ProjectCard';

const ProjectMap = dynamic(() =>
  import('@/components/ProjectMap').then((mod) => mod.ProjectMap),
  { ssr: false }
);

import { ProjectFilter } from '@/components/ProjectFilter';
import { Home } from 'lucide-react';

const mockProjects: ProjectCardProps[] = Array.from({ length: 6 }, (_, i) => ({
  name: 'Project Name',
  status: i % 3 === 0 ? 'Completed' : 'In Progress',
  company: 'Company Name',
  location: 'Location',
  type: 'Commercial',
}));

export default function ProjectsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2} px={4} mb={2}>
        <Home size={18} color="#4B5563" />
        <Typography fontSize={26} color="#9CA3AF">›</Typography>
        <Box
          sx={{
            backgroundColor: '#EBF8F8',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 600,
            color: '#204C5B',
          }}
        >
          Projects
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        height={isMobile ? 'auto' : 'calc(100vh - 80px)'}
      >
        <Box
          flex={1}
          px={isMobile ? 2 : 3}
          py={4}
          overflow="auto"
          width={isMobile ? '100%' : '60%'}
        >
          <ProjectFilter />
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
            gap={2}
            mt={2}
          >
            {mockProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Box>
        </Box>

        <Box
          width={isMobile ? '100%' : '40%'}
          height={isMobile ? 400 : '100%'}
        >
          <ProjectMap />
        </Box>
      </Box>
    </Box>
  );
}
