'use client';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { ChevronRight, X, ArrowUpDown } from 'lucide-react';
import { ProductCard } from './ProductCard';

const categories = [
  { name: 'All', count: 12131 },
  { name: 'Category 1', count: 524 },
  { name: 'Category 2', count: 524 },
  { name: 'Category 3', count: 48 },
  { name: 'Category 4', count: 12 },
  { name: 'Category 5', count: 8 },
  { name: 'Category 6', count: 82 },
];

const products = Array.from({ length: 12 }, () => ({
  title: 'Marble Crema Marfil',
  company: 'Company name',
  category: 'Flooring',
}));

export const ProductResult = () => {
  return (
    <Box width={'100%'}>
      <Typography fontSize={24} fontWeight={600} mb={1}>
        Products
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap={1.2}
        mb={3}
        overflow="auto"
        sx={{ whiteSpace: 'nowrap', pr: 2 }}
      >
        {categories.map((cat, i) => (
          <Box
            key={i}
            display="flex"
            alignItems="center"
            px={1.8}
            py={1}
            sx={{
              borderRadius: 999,
              border: cat.name === 'All' ? 'none' : '1px solid #E5E7EB',
              backgroundColor: cat.name === 'All' ? '#204C5B' : '#fff',
              color: cat.name === 'All' ? '#fff' : '#111',
              fontSize: 14,
              fontWeight: 500,
              gap: 0.75,
              lineHeight: 1,
            }}
          >
            {cat.name}
            <Box
              component="span"
              px={0.8}
              py={0.5}
              sx={{
                backgroundColor: cat.name === 'All' ? '#D8F0FA' : '#333',
                color: cat.name === 'All' ? '#204C5B' : '#fff',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {cat.count}
            </Box>
          </Box>
        ))}
        <IconButton
          size="small"
          sx={{
            border: '1px solid #F7FAFB',
            backgroundColor: '#F7FAFB',
          }}
        >
          <ChevronRight size={16} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            border: '1px solid #F7FAFB',
            backgroundColor: '#F7FAFB',
          }}
        >
          <X size={16} color="#153D47" />
        </IconButton>
        <Button
          variant="outlined"
          startIcon={<ArrowUpDown size={14} />}
          sx={{
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 500,
            textTransform: 'none',
            borderColor: '#F7FAFB',
            color: '#111',
            backgroundColor: '#F7FAFB',
            height: 42,
          }}
        >
          Brands A-Z
        </Button>
      </Box>

      <Grid container spacing={2}>
        {products.map((product, i) => (
          <Grid key={i}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
