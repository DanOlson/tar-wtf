import React from 'react'
import PropTypes from 'prop-types'

export default function AdvancedOptionsSelector({ isAdvanced, onChange, className }) {
  return (
    <div className={className}>
      <label className='selection-label' htmlFor='advanced'>Advanced</label>
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
        </div>
      </div>
    </div>
  )
}

AdvancedOptionsSelector.propTypes = {
  className: PropTypes.string
}

AdvancedOptionsSelector.defaultProps = {
  className: ''
}
