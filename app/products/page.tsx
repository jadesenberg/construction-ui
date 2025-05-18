'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { FilterSidebar } from '@/components/FilterSidebar'
import { ProductResult } from '@/components/ProductResult'
import { Home } from 'lucide-react'

export default function ProductsPage() {
  const theme = useTheme()

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2} px={{ xs: 2, md: 4 }} mb={4}>
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
          Products
        </Box>
      </Box>

      <Typography
        variant="h6"
        fontWeight={500}
        sx={{ px: { xs: 2, md: 4 }, mb: 2 }}
      >
        Curated Collections
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: 280 },
            flexShrink: 0,
            px: { xs: 2, md: 3 },
            py: 4,
            minHeight: { md: '100vh' },
          }}
        >
          <FilterSidebar />
        </Box>

        <Box
          flex={1}
          px={{ xs: 2, md: 4 }}
          py={4}
        >
          <ProductResult />
        </Box>
      </Box>
    </Box>
  )
}