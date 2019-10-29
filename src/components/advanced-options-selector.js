import React from 'react'

export default function AdvancedOptionsSelector({ isAdvanced, onChange }) {
  return (
    <div className='form-group'>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='checkbox'
          name='advanced'
          id='advanced'
          value='1'
          checked={isAdvanced}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='advanced'>advanced</label>
      </div>
    </div>
  )
}
