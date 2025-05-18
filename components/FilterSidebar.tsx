'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  Checkbox,
  Collapse,
} from '@mui/material'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { SearchInput } from './SearchInput'

export const FilterSidebar = () => {

  const [brandExpanded, setBrandExpanded] = useState(true)
  const [supplierExpanded, setSupplierExpanded] = useState(false)
  const [keywordExpanded, setKeywordExpanded] = useState(false)

  const ToggleSectionLabel = ({
    expanded,
    label,
    onClick,
  }: {
    expanded: boolean
    label: string
    onClick: () => void
  }) => (
    <Typography
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      sx={{
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        color: '#204C5B',
        display: 'flex',
        alignItems: 'center',
        mt: 1,
      }}
    >
      {label}
      {expanded ? (
        <ChevronUp size={16} style={{ marginLeft: 4 }} />
      ) : (
        <ChevronDown size={16} style={{ marginLeft: 4 }} />
      )}
    </Typography>
  )

  const renderBrandGroup = (label: string) => (
    <Box>
      <Typography fontWeight={600} fontSize={14} mt={2} mb={1}>
        {label}
      </Typography>
      {[1, 2, 3, 4].map((id) => (
        <Box key={id} display="flex" alignItems="center" mb={1}>
          <Checkbox size="small" sx={{ p: 0.5, color: '#D1D5DB' }} />
          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontSize={14} color="#686767">
              Brand {id}
            </Typography>
            <Box
              sx={{
                backgroundColor: '#F3F4F6',
                fontSize: 12,
                px: 1,
                borderRadius: 10,
                fontWeight: 500,
                color: '#444',
                minWidth: 24,
                textAlign: 'center',
              }}
            >
              {['342', '2', '104', '72'][id - 1]}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )

  const renderSupplierGroup = () => (
    <Box>
      {[1, 2, 3, 4].map((id) => (
        <Box key={id} display="flex" alignItems="center" mb={1}>
          <Checkbox size="small" sx={{ p: 0.5, color: '#D1D5DB' }} />
          <Typography fontSize={14} color="#686767">
            Brand {id}
          </Typography>
        </Box>
      ))}
    </Box>
  )

  const renderKeywordTags = () => (
    <Box display="flex" flexWrap="wrap" gap={1.2} rowGap={1.2} mb={1}>
      {['Brand 1', 'Brs', 'Example 2', 'Brand Example 2', 'Example 2', 'Brand 1'].map((kw, i) => (
        <Box
          key={i}
          sx={{
            backgroundColor: '#F3F4F6',
            px: 1.5,
            py: 0.5,
            borderRadius: 10,
            fontSize: 13,
            color: '#686767',
            fontWeight: 500,
          }}
        >
          {kw}
        </Box>
      ))}
    </Box>
  )

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 250 },
        px: { xs: 2, sm: 0 },
        mb: { xs: 4, sm: 0 },
      }}
    >
      <Typography fontWeight={600} fontSize={20} mb={3}>
        Filters
      </Typography>

      <Typography fontWeight={600} fontSize={14} mb={1}>
        Brands
      </Typography>
      <SearchInput placeholder="Search brand" size="compact" />
      <Collapse in={brandExpanded}>
        {['A', 'B', 'C'].map((letter) => (
          <Box key={letter}>{renderBrandGroup(letter)}</Box>
        ))}
      </Collapse>
      <ToggleSectionLabel
        expanded={brandExpanded}
        label={brandExpanded ? 'Show less' : 'Show more'}
        onClick={() => setBrandExpanded(!brandExpanded)}
      />

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600} fontSize={14} mb={1}>
        Suppliers
      </Typography>
      <Collapse in={supplierExpanded}>{renderSupplierGroup()}</Collapse>
      <ToggleSectionLabel
        expanded={supplierExpanded}
        label="All Suppliers"
        onClick={() => setSupplierExpanded(!supplierExpanded)}
      />

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600} fontSize={14} mb={1}>
        Keywords
      </Typography>
      <Collapse in={keywordExpanded}>{renderKeywordTags()}</Collapse>
      <ToggleSectionLabel
        expanded={keywordExpanded}
        label="All Keywords"
        onClick={() => setKeywordExpanded(!keywordExpanded)}
      />
    </Box>
  )
}
