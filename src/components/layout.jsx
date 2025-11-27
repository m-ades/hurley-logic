import { useState } from 'react'
import { Box, Container, Typography, Tooltip, Select, MenuItem, FormControl } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RulesReference from './rulesreference.jsx'

export default function Layout({ title, subtitle, score, total, scoreStyle, currentProofId, completedProofs, children, worksheets, currentWorksheetIndex, onWorksheetIndexChange, onExportClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia && window.matchMedia('(hover: none)').matches
  })
  const handleOpen = () => setDropdownOpen(true)
  const handleClose = () => setDropdownOpen(false)
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          background: 'radial-gradient(125% 125% at -2% 101%, rgba(255, 240, 220, 0.75) 10.5%, rgba(255, 242, 225, 0.78) 16%, rgba(255, 245, 230, 0.8) 17.5%, rgba(255, 248, 240, 0.82) 25%, rgba(252, 240, 248, 0.85) 40%, rgba(250, 240, 252, 0.88) 65%, rgba(245, 250, 255, 0.9) 100%)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.9,
        }}
      />
      <RulesReference />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: 'transparent',
          pt: 2,
          pb: 2,
        }}
      >
        <Container maxWidth="lg" sx={{ mx: 'auto', px: { xs: 1, sm: 2, md: 4 } }}>
          <Box
            sx={{
              width: { xs: '100%', lg: 'calc(100% - 210px)' },
              pb: 1,
              ml: { xs: 0, md: 0 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 0.25,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1.25rem', md: '1.5rem' }, mb: 0 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: { xs: '0.9rem', md: '1rem' }, mt: 0.25, mb: 0 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          height: { xs: '50px', md: '60px' },
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          transform: 'none',
          transformOrigin: 'top left',
          width: '100%',
          marginLeft: { xs: 0, md: 0 },
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, position: 'relative', zIndex: 1, mx: 0, px: { xs: 1, sm: 2, md: 4 }, ml: { xs: 0, md: 'auto' }, mr: { xs: 0, md: 0, lg: 340 } }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 2, 
            flexWrap: 'wrap',
            pl: { xs: 0, md: '224px' }, //align with proof box
          }}>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1rem', md: '1.25rem' } }}>
              <span style={scoreStyle}>{score}</span> / {total}
            </Typography>
            {score === total && total > 0 && (
              <CheckCircleIcon sx={{ color: '#beafc2', fontSize: { xs: 20, md: 28 } }} />
            )}
            {onExportClick && (
              <Tooltip title="export ur answers to pdf">
                <button
                  onClick={onExportClick}
                  className="action_has has_saved"
                  aria-label="Export PDF"
                  type="button"
                  style={{
                    margin: 0,
                    minWidth: 'auto',
                  }}
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="box"
                    />
                    <path
                      d="M7 3L7 8L15 8"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="line-top"
                    />
                    <path
                      d="M17 20L17 13L7 13L7 20"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="line-bottom"
                    />
                  </svg>
                </button>
              </Tooltip>
            )}
            {worksheets && (
              <FormControl 
                sx={{ minWidth: 'auto' }}
                {...(!isTouchDevice ? { onMouseEnter: handleOpen, onMouseLeave: handleClose } : {})}
              >
                <Select
                  value={currentWorksheetIndex}
                  onChange={(e) => {
                    onWorksheetIndexChange(e.target.value)
                    handleClose()
                  }}
                  open={dropdownOpen}
                  onOpen={handleOpen}
                  onClose={handleClose}
                  displayEmpty
                  sx={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    color: 'rgba(0, 0, 0, 0.9)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0.4rem 0.5rem',
                    height: 'auto',
                    minWidth: '120px',
                    '& .MuiSelect-select': {
                      padding: '0 !important',
                      paddingRight: '1.5rem !important',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiSelect-icon': {
                      color: 'rgba(0, 0, 0, 0.6)',
                      right: '0.5rem',
                      fontSize: '1.2rem',
                    },
                  }}
                  MenuProps={
                    !isTouchDevice
                      ? {
                          onMouseEnter: handleOpen,
                          onMouseLeave: handleClose,
                          PaperProps: {
                            onMouseEnter: handleOpen,
                            onMouseLeave: handleClose,
                          },
                        }
                      : undefined
                  }
                >
                  {worksheets.map((worksheet, idx) => {
                    const worksheetCompleted = worksheet.proofs.every(p => completedProofs.has(p.id));
                    return (
                      <MenuItem key={worksheet.id} value={idx} sx={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                          <span>{worksheet.title}</span>
                          {worksheetCompleted && (
                            <CheckCircleIcon sx={{ color: '#beafc2', fontSize: 16 }} />
                          )}
                        </Box>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          </Box>
          {children}
        </Container>
      </Box>
    </>
  )
}
