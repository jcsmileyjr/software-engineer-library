import "./mobileTools.css";
import ToolsButton from "../toolsButton/ToolsButton";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MobileTools = ({viewList}) => {
    const [openBookModal, setopenBookModal] = useState(false);

    const test = () => {
        console.log("testing")
    }

    const isAddBookModalOpen = () => {
        setopenBookModal(!openBookModal)
    }

    return(
        <section className="mobileTools--container">
            <ToolsButton title="Add a book" imageType="add" action={isAddBookModalOpen}  />
            <ToolsButton title="View List" imageType="list" action={viewList} />
            <ToolsButton title="Sort" imageType="sort" action={test} />
            <Modal
                isOpen={!openBookModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="mobileTools__openBookModal--container">
                    <h2>Add a book</h2>
                    <div className="openBookModal__input--container">
                        <input type="text" name="bookTitle"  />
                        <label id="bookTitleLabel" htmlFor="bookTitle" >Book Title</label>
                    </div>
                    <button onClick={() => isAddBookModalOpen()}>close</button>
                </div>
            </Modal>
        </section>
    )
}

export default MobileTools;