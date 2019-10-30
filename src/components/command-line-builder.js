import React, { useState } from 'react'
import Terminal from './terminal'
import ModeSelector from './mode-selector'
import CompressionSelector from './compression-selector'
import VerboseSelector from './verbose-selector'
import AdvancedOptionsSelector from './advanced-options-selector'
import '../css/command-line-builder.css'

function CommandLineBuilder () {
  const [mode, setMode] = useState('x');
  const [compression, setCompression] = useState('z')
  const [verbose, setVerbose] = useState(true)
  const [advanced, setAdvanced] = useState(false)

  const ext = compression === 'z' ? 'gz' : 'bz'
  const rest = mode === 'c' ? './my-file-or-directory' : ''
  const verboseFlag = verbose ? 'v' : ''
  const command = advanced
    ? 'man tar'
    : `tar -${mode}${compression}${verboseFlag}f my-archive.tar.${ext} ${rest}`

  function handleModeChange (event) {
    setMode(event.target.value)
  }

  function handleCompressionChange (event) {
    setCompression(event.target.value)
  }

  function handleVerboseChange (event) {
    setVerbose(event.target.checked)
  }

  function handleAdvancedChange(event) {
    setAdvanced(event.target.checked)
  }

  return (
    <div className='command-line-builder container'>
      <form>
        <div class='row'>
          <ModeSelector
            currentMode={mode}
            onChange={handleModeChange}
            className='col-sm-3'
          />
          <CompressionSelector
            currentCompression={compression}
            onChange={handleCompressionChange}
            className='col-sm-3'
            />
          <VerboseSelector
            isVerbose={verbose}
            onChange={handleVerboseChange}
            className='col-sm-3'
            />
          <AdvancedOptionsSelector
            isAdvanced={advanced}
            onChange={handleAdvancedChange}
            className='col-sm-3'
          />
        </div>
      </form>
      <Terminal command={command} />
    </div>
  )
}

export default CommandLineBuilder
