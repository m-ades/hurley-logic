import { useState } from 'react'
import { Box, Typography, IconButton, Drawer, Fab } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import MenuBookIcon from '@mui/icons-material/MenuBook'

function RulesCard({ title, children, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '380px' },
        mb: 1,
      }}
    >
      <Box 
        onClick={() => setExpanded(!expanded)}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '12px 16px',
          color: '#beafc2',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: '#8155ba',
            backgroundColor: 'rgba(129, 85, 186, 0.08)',
          },
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'inherit',
            fontWeight: expanded ? 600 : 400,
            fontSize: '1rem',
          }}
        >
          {title}
        </Typography>
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
          sx={{ 
            color: 'inherit',
            padding: '4px',
            '&:hover': { backgroundColor: 'transparent' }
          }}
        >
          {expanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
        </IconButton>
      </Box>
      {expanded && (
        <Box 
          sx={{ 
            fontSize: '0.9rem', 
            lineHeight: 1.5, 
            color: 'rgba(0, 0, 0, 0.9)',
            padding: '12px 16px',
            paddingTop: '8px',
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

export default function RulesReference() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const rulesContent = (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
        p: 2,
      }}
    >
      <RulesCard title="Rules of Reference" defaultExpanded={false}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Rules of Implication
        </Typography>
        <Box component="div" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
          <div><strong>1. MP:</strong> p ⊃ q, p / q</div>
          <div><strong>2. MT:</strong> p ⊃ q, ~q / ~p</div>
          <div><strong>3. HS:</strong> p ⊃ q, q ⊃ r / p ⊃ r</div>
          <div><strong>4. DS:</strong> p ∨ q, ~p / q</div>
          <div><strong>5. CD:</strong> (p ⊃ q) • (r ⊃ s), p ∨ r / q ∨ s</div>
          <div><strong>6. Simp:</strong> p • q / p</div>
          <div><strong>7. Conj:</strong> p, q / p • q</div>
          <div><strong>8. Add:</strong> p / p ∨ q</div>
          <div><strong>19. CP:</strong> Conditional Proof (see below)</div>
          <div><strong>20. IP:</strong> Indirect Proof (see below)</div>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Rules of Replacement
        </Typography>
        <Box component="div" sx={{ fontSize: '0.85rem' }}>
          <div><strong>9. DM:</strong> ~(p • q) :: (~p ∨ ~q)</div>
          <div><strong>10. Com:</strong> (p ∨ q) :: (q ∨ p)</div>
          <div><strong>11. Assoc:</strong> [p ∨ (q ∨ r)] :: [(p ∨ q) ∨ r]</div>
          <div><strong>12. Dist:</strong> [p • (q ∨ r)] :: [(p • q) ∨ (p • r)]</div>
          <div><strong>13. DN:</strong> p :: ~~p</div>
          <div><strong>14. Trans:</strong> (p ⊃ q) :: (~q ⊃ ~p)</div>
          <div><strong>15. Impl:</strong> (p ⊃ q) :: (~p ∨ q)</div>
          <div><strong>16. Equiv:</strong> (p ≡ q) :: [(p ⊃ q) • (q ⊃ p)]</div>
          <div><strong>17. Exp:</strong> [(p • q) ⊃ r] :: [p ⊃ (q ⊃ r)]</div>
          <div><strong>18. Taut:</strong> p :: (p ∨ p)</div>
        </Box>
      </RulesCard>
      
      <RulesCard title="Predicate Logic Rules" defaultExpanded={false}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Predicate Logic Rules
        </Typography>
        <Box component="div" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
          <div><strong>UI:</strong> (x)Fx / Fy</div>
          <div><strong>UG:</strong> Fy / (x)Fx</div>
          <div><strong>EI:</strong> (∃x)Fx / Fn</div>
          <div><strong>EG:</strong> Fn / (∃x)Fx</div>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Change of Quantifier (CQ)
        </Typography>
        <Box component="div" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
          <div><strong>CQ:</strong> ~(x)Fx :: (∃x)~Fx</div>
          <div><strong>CQ:</strong> ~(∃x)Fx :: (x)~Fx</div>
          <div><strong>CQ:</strong> (x)~Fx :: ~(∃x)Fx</div>
          <div><strong>CQ:</strong> (∃x)~Fx :: ~(x)Fx</div>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Conditional Proof (CP) & Indirect Proof (IP)
        </Typography>
        <Box component="div" sx={{ fontSize: '0.85rem' }}>
          <div><strong>ACP:</strong> Assumption for Conditional Proof</div>
          <div><strong>CP:</strong> To prove p ⊃ q, assume p (ACP) in indented subderivation, derive q, then discharge with CP citing the subderivation range</div>
          <div><strong>AIP:</strong> Assumption for Indirect Proof</div>
          <div><strong>IP:</strong> To prove ~p, assume p (AIP) in indented subderivation, derive a contradiction (q • ~q), then discharge with IP citing the subderivation range</div>
        </Box>
      </RulesCard>
      
      <RulesCard title="Keyboard Shortcuts" defaultExpanded={false}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Symbols
        </Typography>
        <Box component="div" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
          <div><strong>•</strong> Type <strong>&</strong> or <strong>^</strong> for • (conjunction)</div>
          <div><strong>•</strong> Type <strong>v</strong> for ∨ (disjunction)</div>
          <div><strong>•</strong> Type <strong>{'>'}</strong> or <strong>→</strong> or <strong>--&gt;</strong> for ⊃ (conditional)</div>
          <div><strong>•</strong> Type <strong>==</strong> for ≡ (biconditional)</div>
          <div><strong>•</strong> Type <strong>all</strong> for ∀ (universal quantifier)</div>
          <div><strong>•</strong> Type <strong>some</strong> for ∃ (existential quantifier)</div>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#8155ba', fontSize: '0.95rem' }}>
          Navigation
        </Typography>
        <Box component="div" sx={{ fontSize: '0.85rem' }}>
          <div><strong>•</strong> Press <strong>Enter</strong> to start a new line</div>
          <div><strong>•</strong> Press the <strong>right arrow key</strong> to write a justification in your line</div>
        </Box>
      </RulesCard>
    </Box>
  )
  
  return (
    <>
      {/* Desktop: Fixed panel */}
      <Box
        sx={{
          position: 'fixed',
          right: { xs: 8, md: 16 },
          top: { xs: 8, md: 16 },
          transform: { xs: 'none', md: 'scale(0.85)' },
          transformOrigin: 'top right',
          zIndex: 101,
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRight: 1,
          borderColor: 'divider',
          pr: { xs: 1, md: 2 },
          display: { xs: 'none', md: 'block' },
        }}
      >
        {rulesContent}
      </Box>
      
      {/* Mobile: Floating action button */}
      <Fab
        color="primary"
        aria-label="rules"
        onClick={() => setMobileOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          display: { xs: 'flex', md: 'none' },
          backgroundColor: '#8155ba',
          '&:hover': {
            backgroundColor: '#6a4499',
          },
        }}
      >
        <MenuBookIcon />
      </Fab>
      
      {/* Mobile: Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: '85%', sm: '400px' },
            maxWidth: '400px',
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Rules Reference</Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <ExpandLessIcon />
          </IconButton>
        </Box>
        {rulesContent}
      </Drawer>
    </>
  )
}

