import React from 'react'
import { Button2 } from './layouts2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Button</h1>
      <Button2
        style={{ color: '#FFF' }}
        theme="danger"
        size="large"
        path="https://reactjs.org/"
      >
        Button2 Default
      </Button2>
      <Button2
        theme="warning"
        size="large"
        onClick={() => {
          console.log(1)
        }}
      >
        Warning Button2
      </Button2>
      <Button2 theme="info" size="small">
        Info Button
      </Button2>
      <Button2
        as="button"
        theme="success"
        size="large"
        border={1}
        onClick={() => console.log('hello react')}
      >
        动感光波
        <FontAwesomeIcon icon={faUser} />
      </Button2>
    </div>
  )
}

export default App
