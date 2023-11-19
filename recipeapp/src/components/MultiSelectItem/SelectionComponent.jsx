import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import MultiSelectAll from './MultiSelectAll'

const Selection = ({ departmentNames, initialValue, onchange }) => {
  const getTextBoxInputValue = (input) => {
    return input.map((itm) => itm.label).join(';')
  }

  const [currentSelection, setCurrentSelection] = useState(initialValue)

  useEffect(() => {
    onchange(currentSelection)
  }, [currentSelection])

  const handleSelectionChange = (result) => {
    const valueToSave = result.map((itm) => itm.label).join(',')
    setCurrentSelection(valueToSave)
  }

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item sx={{ display: 'flex', justifyContent: 'end', width: '60%' }}>
        <MultiSelectAll
          sx={{ maxheight: '700px' }}
          items={departmentNames}
          selectAllLabel='Select All'
          value={initialValue}
          onChange={handleSelectionChange}
        />
      </Grid>
    </Grid>
  )
}

export default Selection
