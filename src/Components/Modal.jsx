import React from 'react'
import './Modal.css'

function Modal({closeModal}) {
  return (
    <div className='modal-background'>
        <div className="modalcontainer">
            <button onClick={()=>closeModal(false)}>X</button>
            <div className="title">
                <h2> Are you sure you want to continue?</h2>
            </div>
           
            <div className="body">
                <p>The next page is awesome! you should move forward</p>
            </div>
            <div className="footer">
                <button onClick={()=>closeModal(false)} className='closebtn'>cancel</button>
                <button className='continuebtn'>continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal