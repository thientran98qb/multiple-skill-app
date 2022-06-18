import { Box, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  errorContainer: {
    textAlign: 'center',
  },
  errorText: {
    color: theme.palette.primary.main
  }
}))
const NotFound = () => {
  const classess = useStyles()
  return (
    <Box className={classess.root}>
      <Box className={classess.errorContainer}>
        <Typography className={classess.errorText} style={{fontSize: '100px', fontWeight: 'bold'}}>404</Typography>
        <Typography>Not found this page</Typography>
      </Box>
    </Box>
  )
}

export default NotFound
