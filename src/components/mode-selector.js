import React from 'react'
import PropTypes from 'prop-types'

export default function ModeSelector ({ currentMode, onChange, className }) {
  return (
    <div className={className}>
      <label className='selection-label'>Mode</label>
      <div className='form-group'>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='mode'
            id='mode-extract'
            value='x'
            checked={currentMode === 'x'}
            onChange={onChange}
          />
          <label className='form-check-label' htmlFor='mode-extract'>extract</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='mode'
            id='mode-compress'
            value='c'
            checked={currentMode === 'c'}
            onChange={onChange}
          />
          <label className='form-check-label' htmlFor='mode-compress'>create</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='mode'
            id='mode-list'
            value='t'
            checked={currentMode === 't'}
            onChange={onChange}
          />
          <label className='form-check-label' htmlFor='mode-list'>list contents</label>
        </div>
      </div>
    </div>
  )
}

ModeSelector.propTypes = {
  className: PropTypes.string
}

ModeSelector.defaultProps = {
  className: ''
}
