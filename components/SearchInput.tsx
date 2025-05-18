'use client';
import { Box, InputBase, Paper, SxProps } from '@mui/material';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: 'default' | 'compact';
  sx?: SxProps;
}

export const SearchInput = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  size = 'default',
  sx = {},
}: SearchInputProps) => {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        px: 2,
        py: size === 'compact' ? 0.5 : 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 0 0 1px #eee',
        width: '100%',
        ...sx,
      }}
    >
      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        sx={{
          flex: 1,
          fontSize: 14,
          '&::placeholder': {
            color: '#000',
          },
        }}
      />
      <Box
        sx={{
          width: 30,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EEF3F6',
          borderRadius: '50%',
        }}
      >
        <Search size={16} color="#153D47" />
      </Box>
    </Paper>
  );
};
