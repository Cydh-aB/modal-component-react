# React modal plugin

A library of React components created using 'create-react-app'.

## Installation

Run the following command: ```npm install component-modal```

## How to use

```
import React, { useState } from 'react';
import { Modal } from "@glg-dev/react-modal";

const App = () => {

  const [display, setDisplay] = useState(false)
  const yourTitle = "Write your title"
  cont message = "Your message here

  return (
    <div>
      <button onClick={() => setDisplay(true)}>
        Show modal
      </button>
      <Modal 
        title={yourTitle} 
        content={message} 
        hideModal={() => setDisplay(false)}
        visible={display}
      />

    </div>
  );
};

export default App;
```

## How to custom

If you want, you can add your own style, copy and edit the following snippet : 

```
:root {
  --modal-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --modal-text-color: #000;
  --modal-text-decoration: none;
  --modal-z-index: 100;
  --modal-wrapper-bg: rgba(0, 0, 0, 0.7);
  --modal-container-bg: #FFF;
  --modal-container-border-radius: 1rem;
  --modal-container-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px, rgba(0, 0, 0, 0.3) 0px 0px 15px;
  --modal-container-padding: 2rem;
  --modal-elements-gap: 1rem;
  --modal-close-button-color: black;
  --modal-close-button-border-radius: 50%;
  --modal-title-font-size: 1.5rem;
  --modal-content-font-size: 1rem;
}
```