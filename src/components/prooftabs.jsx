import { useState } from 'react'
import { Box, Stack, Tabs, Tab, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ProofEditor from './proofeditor.jsx'
import { PROOFS } from '../proofs.js'

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
        <Box sx={{ pl: 3, pr: 3, pt: 0, pb: 0, overflowX: 'auto', minWidth: 0 }}>
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
  currentProofIndex, 
  onProofIndexChange, 
  completedProofs, 
  onProofComplete,
  getSavedProofState,
  handleProofStateChange
}) {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', mt: 3 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentProofIndex}
        onChange={(e, newValue) => onProofIndexChange(newValue)}
        aria-label="Problem tabs"
        textColor="primary"
        indicatorColor="primary"
        sx={{ 
          borderRight: 1, 
          borderColor: 'divider',
          '& .MuiTab-root': {
            color: '#beafc2',
            transition: 'all 0.2s ease',
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
        {PROOFS.map((proof, idx) => (
          <Tab
            key={proof.id}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
                <span>Question {proof.id}</span>
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
      {PROOFS.map((proof, idx) => (
        <TabPanel key={proof.id} value={currentProofIndex} index={idx}>
          <Stack spacing={3} sx={{ minWidth: 0 }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.9)', fontFamily: '"IBM Plex Sans", sans-serif' }}>
                Question {proof.id}
              </Typography>
              {proof.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontFamily: '"IBM Plex Sans", sans-serif' }}>
                  {proof.description}
                </Typography>
              )}
              <ProofEditor 
                key={`proof-${proof.id}`} 
                proof={proof} 
                onProofComplete={onProofComplete}
                savedState={getSavedProofState(proof.id)}
                onStateChange={(state) => handleProofStateChange(proof.id, state)}
              />
            </Box>
          </Stack>
        </TabPanel>
      ))}
    </Box>
  )
}

