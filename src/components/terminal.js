import React, { useState } from 'react'
import { terminalBackground, terminalText } from '../utils/colors'
import Clipboard from 'react-clipboard.js'
import Tooltip from './tooltip'
import '../css/icons.css'

const buttonStyle = {
  color: '#fff',
  top: 0,
  right: 0,
  position: 'absolute'
}

const style = {
  backgroundColor: terminalBackground,
  position: 'relative',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem'
}

const codeStyle = {
  color: terminalText,
  marginBottom: 0,
  fontSize: 'large'
}

function Terminal ({ command }) {
  const [showTooltip, setShowTooltip] = useState(false)

  function showCopied () {
    setShowTooltip(true)
    setTimeout(() => {
      setShowTooltip(false)
    }, 1000)
  }

  const tooltip = showTooltip
    ? <Tooltip text='copied!' />
    : null

  return (
    <div className='terminal' style={style}>
      {tooltip}
      <Clipboard
        className="btn"
        data-clipboard-text={command.trim()}
        style={buttonStyle}
        onSuccess={showCopied}>
        <span className='icon-clippy' style={{ fontSize: 'x-large' }} />
      </Clipboard>
      <pre style={codeStyle}>
        <code>> {command}</code>
      </pre>
    </div>
  )
}

export default Terminal
