import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
import { useEffect } from "react";

export const Modal = ({title, content, open, hideModal}) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(open)
    },[open])

    return isOpen && (
        <div className="wrapper">
            <div className="container">
                <div className="close" onClick={hideModal}>X</div>
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
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