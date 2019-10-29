import React from 'react'

export default function VerboseSelector({ isVerbose, onChange }) {
  return (
    <div className='form-group'>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='checkbox'
          name='verbose'
          id='verbose'
          value='1'
          checked={isVerbose}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='verbose'>verbose output</label>
      </div>
    </div>
  )
}
