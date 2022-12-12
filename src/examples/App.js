import React, { useState } from 'react'
import { Modal } from '../lib'

const App = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div>
            <button onClick={() => setDisplay(true)}>
                Show modal
            </button>
            <Modal
                title='Welcome !'
                content='This is a modal plugin.'
                hideModal={() => setDisplay(false)}
                visible={display}
            />
        </div>
    )
}

export default App