import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
import styles from './Modal.module.css'
import { useEffect } from "react";

export const Modal = ({title, content, open, hideModal}) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(open)
    },[open])

    return isOpen && (
        <div>
            <div>
                <div onClick={hideModal}></div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    open: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
}