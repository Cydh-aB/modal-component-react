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
        <div styleName={styles.wrapper} >
            <div styleName={styles.container}>
                <div styleName={styles.close} onClick={hideModal}></div>
                <h1 styleName={styles.title}>{title}</h1>
                <p styleName={styles.content}>{content}</p>
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