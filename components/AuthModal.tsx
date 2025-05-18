'use client'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  TextField,
  Button,
} from '@mui/material'

interface AuthModalProps {
  open: boolean
  onClose: () => void
}

export const AuthModal = ({ open, onClose }: AuthModalProps) => {
  const fields = [
    { label: 'Email address', type: 'email' },
    { label: 'Password', type: 'password' },
  ]

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: 20,
          mt: 2,
        }}
      >
        Log in or Create Account
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          {fields.map(({ label, type }, idx) => (
            <Box
              key={idx}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2.5,
                boxShadow: '0 0 0 1px #eee',
                backgroundColor: '#fff',
              }}
            >
              <TextField
                type={type}
                placeholder={label}
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                inputProps={{
                  style: { fontSize: 14, color: '#000' },
                }}
              />
            </Box>
          ))}

          <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: 999,
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
                borderColor: '#204C5B',
                color: '#204C5B',
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                borderRadius: 999,
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                backgroundColor: '#204C5B',
                '&:hover': {
                  backgroundColor: '#1f4f5d',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
