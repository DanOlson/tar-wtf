import React from 'react'
import PropTypes from 'prop-types'

export default function VerboseSelector({ isVerbose, onChange, className }) {
  return (
    <div className={className}>
      <label className='selection-label' htmlFor='verbose'>Verbose</label>
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
        </div>
      </div>
    </div>
  )
}

VerboseSelector.propTypes = {
  className: PropTypes.string
}

VerboseSelector.defaultProps = {
  className: ''
}
