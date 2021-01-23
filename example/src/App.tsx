import React from 'react'

import { InstantMessenger } from 'instant-messenger'
import 'instant-messenger/dist/index.css'

const { ClientMessenger } = InstantMessenger;

const App = () => {
  return <ClientMessenger adminOnline={ false } />
}

export default App
