import { Box, Container, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RulesReference from './rulesreference.jsx'

export default function Layout({ title, score, total, scoreStyle, currentProofId, completedProofs, children }) {
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
              }}
            >
            <Typography variant="h5" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                {title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
              <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.9)', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  <span style={scoreStyle}>{score}</span> / {total}
                </Typography>
                {completedProofs.has(currentProofId) && (
                <CheckCircleIcon sx={{ color: '#beafc2', fontSize: { xs: 20, md: 28 } }} />
                )}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          height: { xs: '120px', md: '140px' },
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          transform: { xs: 'none', md: 'scale(0.85)' },
          transformOrigin: 'top center',
          width: { xs: '100%', md: '117.65%' }, 
          marginLeft: { xs: 0, md: '-8.825%' },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, position: 'relative', zIndex: 1, mx: 'auto', px: { xs: 1, sm: 2, md: 4 } }}>
          {children}
        </Container>
      </Box>
    </>
  )
}

