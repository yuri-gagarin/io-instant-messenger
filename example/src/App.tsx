import React from 'react'

import { ClientMessenger } from 'instant-messenger'
import 'instant-messenger/dist/index.css'

const App = () => {
  return <ClientMessenger adminOnline={ false } />
}

export default App
