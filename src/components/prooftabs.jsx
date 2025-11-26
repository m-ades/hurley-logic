import { useState } from 'react'
import * as React from 'react'
import { Box, Stack, Tabs, Tab, Typography, useTheme, useMediaQuery } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ProofEditor from './proofeditor.jsx'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ 
          pl: { xs: 0, md: 3 }, 
          pr: { xs: 0, md: 3 }, 
          pt: { xs: 2, md: 0 }, 
          pb: 0, 
          overflowX: 'auto', 
          minWidth: 0, 
          width: '100%',
          height: 'calc(100vh - 200px)',
          overflowY: 'auto',
        }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProofTabs({ 
  proofs,
  currentProofIndex, 
  onProofIndexChange, 
  completedProofs, 
  onProofComplete,
  getSavedProofState,
  handleProofStateChange
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const proofRefs = React.useRef({})
  
  const handleTabChange = (e, newValue) => {
    const currentProof = proofs[currentProofIndex]
    if (currentProof) {
      const proofEditorRef = proofRefs.current[currentProof.id]
      if (proofEditorRef) {
        const derivEl = proofEditorRef.querySelector('derivation-hardegree')
        if (derivEl?.getState && !derivEl._isRestoring) {
          try {
            handleProofStateChange(currentProof.id, derivEl.getState())
          } catch (err) {
            // ignore
          }
        }
      }
    }
    onProofIndexChange(newValue)
  }
  
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 0 }}>
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        variant="scrollable"
        value={currentProofIndex}
        onChange={handleTabChange}
        aria-label="Problem tabs"
        textColor="primary"
        indicatorColor="primary"
        sx={{ 
          borderRight: { xs: 0, md: 0 },
          borderBottom: { xs: 0, md: 0 },
          minWidth: { xs: 'auto', md: 200 },
          maxWidth: { xs: '100%', md: 200 },
          '& .MuiTab-root': {
            color: '#beafc2',
            transition: 'all 0.2s ease',
            minWidth: { xs: 'auto', md: 200 },
            fontSize: { xs: '0.875rem', md: '1rem' },
            '&:hover': {
              color: '#8155ba',
              backgroundColor: 'rgba(129, 85, 186, 0.08)',
            },
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#8155ba',
            fontWeight: 600,
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#8155ba',
          },
        }}
      >
        {proofs.map((proof, idx) => (
          <Tab
            key={proof.id}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
                <span>Question {proof.questionId || proof.id}</span>
                {completedProofs.has(proof.id) && (
                  <CheckCircleIcon sx={{ color: '#beafc2', fontSize: 16 }} />
                )}
              </Box>
            }
            {...a11yProps(idx)}
            sx={{ 
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.9)',
              '&:hover': {
                color: '#8155ba',
                '& span': {
                  color: '#8155ba',
                },
              },
              '&.Mui-selected': {
                color: '#8155ba',
                '& span': {
                  color: '#8155ba',
                },
              },
            }}
          />
        ))}
      </Tabs>
      {proofs.map((proof, idx) => (
        <TabPanel key={proof.id} value={currentProofIndex} index={idx}>
          <Stack spacing={3} sx={{ minWidth: 0 }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.9)', fontFamily: '"IBM Plex Sans", sans-serif' }}>
                Question {proof.questionId || proof.id}
              </Typography>
              {proof.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontFamily: '"IBM Plex Sans", sans-serif' }}>
                  {proof.description}
                </Typography>
              )}
              <div ref={el => { if (el) proofRefs.current[proof.id] = el }}>
                <ProofEditor 
                  key={`proof-${proof.id}`} 
                  proof={proof} 
                  onProofComplete={onProofComplete}
                  savedState={getSavedProofState(proof.id)}
                  onStateChange={(state) => handleProofStateChange(proof.id, state)}
                />
              </div>
            </Box>
          </Stack>
        </TabPanel>
      ))}
    </Box>
  )
}
