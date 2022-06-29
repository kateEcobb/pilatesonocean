import React, { FC, SyntheticEvent, useState } from 'react'
import { Typography, Container, Box, Tabs, Tab, styled, TabProps } from '@mui/material'
import Copyright from '../Copyright'
import Link from '../Link'

const Main: FC<any> = ({ children }) => {
  const [linkValue, setLinkValue] = useState(0)

  const handleNavigation = (event: SyntheticEvent, newValue: number) => setLinkValue(newValue)
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom my={6}>
        Pilates on Ocean
      </Typography>
      <Box ml={'-16px'}>
        <StyledTabs value={linkValue} onChange={handleNavigation}>
          <StyledTab label="Home" href="/" />
          <StyledTab label="Contact" href="/contact" />
        </StyledTabs>
      </Box>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
        <Copyright />
      </Box>
    </Container>
  )
}

interface StyledTabsProps {
  children?: React.ReactNode
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

interface StyledTabProps extends TabProps {
  label: string
  href: string
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: '50%',
    width: '100%',
    backgroundColor: '#36454f',
  },
})

const StyledTab = styled((props: StyledTabProps) => <LinkTab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),

    '&.Mui-selected': {
      color: '#343434',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(8, 7, 9, 0.32)',
    },
  }),
)

const LinkTab = (props: StyledTabProps) => {
  // @ts-ignore i don't care
  return <Tab component={Link} {...props} />
}

export default Main
