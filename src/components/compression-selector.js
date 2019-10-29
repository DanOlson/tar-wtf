import React from 'react'

export default function CompressionSelector({ currentCompression, onChange }) {
  return (
    <div className='form-group'>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='compression'
          id='compression-gzip'
          value='z'
          checked={currentCompression === 'z'}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='compression-gzip'>gzip</label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='compression'
          id='compression-bzip2'
          value='j'
          checked={currentCompression === 'j'}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='compression-bzip2'>bzip2</label>
      </div>
    </div>
  )
}
