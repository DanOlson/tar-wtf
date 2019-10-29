import React, { useState } from 'react'
import Terminal from './terminal'
import ModeSelector from './mode-selector';
import CompressionSelector from './compression-selector';
import VerboseSelector from './verbose-selector';
import AdvancedOptionsSelector from './advanced-options-selector';

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
    <>
      <form>
        <ModeSelector
          currentMode={mode}
          onChange={handleModeChange}
        />
        <CompressionSelector
          currentCompression={compression}
          onChange={handleCompressionChange}
        />
        <VerboseSelector
          isVerbose={verbose}
          onChange={handleVerboseChange}
        />
        <AdvancedOptionsSelector
          isAdvanced={advanced}
          onChange={handleAdvancedChange}
        />
      </form>
      <Terminal command={command} />
    </>
  )
}

export default CommandLineBuilder
