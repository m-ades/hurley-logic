import { Box, Container, Typography, Select, MenuItem, FormControl, IconButton } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DownloadIcon from '@mui/icons-material/Download'
import RulesReference from './rulesreference.jsx'

export default function Layout({ title, score, total, scoreStyle, currentProofId, completedProofs, children, worksheets, currentWorksheetIndex, onWorksheetIndexChange, onExportClick }) {
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
              width: { xs: '100%', md: 'calc(100% - 210px)' },
              pb: 2,
              ml: { xs: 0, md: 0 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                {title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, flexWrap: 'wrap' }}>
              <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  <span style={scoreStyle}>{score}</span> / {total}
                </Typography>
                {completedProofs.has(currentProofId) && (
                <CheckCircleIcon sx={{ color: '#beafc2', fontSize: { xs: 20, md: 28 } }} />
                )}
                {/* export to pdf */}
                {onExportClick && (
                  <IconButton
                    onClick={onExportClick}
                    sx={{
                      color: 'rgba(0, 0, 0, 0.9)',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      padding: '0.5rem',
                      '&:hover': {
                        backgroundColor: 'rgba(129, 85, 186, 0.08)',
                      },
                    }}
                    aria-label="Export PDF"
                  >
                    <DownloadIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>
                )}
                {worksheets && (
                  <FormControl sx={{ minWidth: 'auto', ml: 2 }}>
                    <Select
                      value={currentWorksheetIndex}
                      onChange={(e) => onWorksheetIndexChange(e.target.value)}
                      displayEmpty
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontSize: '0.875rem',
                        color: 'rgba(0, 0, 0, 0.9)',
                        borderRadius: '50px',
                        backgroundColor: 'transparent',
                        boxShadow: '3px 3px 8px rgba(190, 190, 190, 0.4), -3px -3px 8px rgba(255, 255, 255, 0.5)',
                        opacity: 0.9,
                        padding: '0.75rem 1.5rem',
                        height: 'auto',
                        '& .MuiSelect-select': {
                          padding: '0 !important',
                          paddingRight: '2rem !important',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&:hover': {
                          opacity: 0.9,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '& .MuiSelect-icon': {
                          color: 'rgba(0, 0, 0, 0.9)',
                          right: '0.75rem',
                        },
                      }}
                    >
                      {worksheets.map((worksheet, idx) => {
                        const worksheetCompleted = worksheet.proofs.every(p => completedProofs.has(p.id));
                        return (
                          <MenuItem key={worksheet.id} value={idx} sx={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
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
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          height: { xs: '100px', md: '120px' },
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          transform: { xs: 'none', md: 'scale(0.85)' },
          transformOrigin: 'top left',
          width: { xs: '100%', md: '117.65%' }, 
          marginLeft: { xs: 0, md: 0 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, position: 'relative', zIndex: 1, mx: 0, px: { xs: 1, sm: 2, md: 4 }, ml: { xs: 0, md: 'auto' }, mr: { xs: 0, md: 210 } }}>
          {children}
        </Container>
      </Box>
    </>
  )
}

