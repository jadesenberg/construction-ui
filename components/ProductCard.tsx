'use client';
import { Box, Typography, Avatar, Button, IconButton } from '@mui/material';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  company: string;
  category: string;
  image?: string;
}

export const ProductCard = ({ title, company, category, image }: ProductCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: 217,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          borderRadius: 3,
          backgroundColor: '#F7FAFB',
          height: 186,
          mb: 2,
        }}
      >
        {image && (
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: 3,
              objectFit: 'cover',
            }}
          />
        )}
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          <Heart size={16} strokeWidth={1.25} color="#204C5B" />
        </IconButton>
      </Box>

      <Typography fontSize={12} fontWeight={500} textTransform="uppercase" color="#7D7D7D">
        {category}
      </Typography>
      <Typography fontSize={14} fontWeight={600} color="#111">
        {title}
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src="https://i.pravatar.cc/20" sx={{ width: 20, height: 20 }} />
        <Typography fontSize={13} color="#333">
          {company}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        sx={{
          mt: 1,
          borderRadius: 999,
          textTransform: 'none',
          fontSize: 14,
          fontWeight: 600,
          borderColor: '#F7FAFB',
          color: '#204C5B',
          backgroundColor: '#F7FAFB',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
          py: '7px',
          px: '16px',
        }}
      >
        View Product
      </Button>
    </Box>
  );
};
