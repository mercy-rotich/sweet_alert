import './App.css'
import { useState } from 'react'

import Modal from './Components/Modal'
function App() {

  const [openModal,setOpenModal]= useState(false)

  return(
    <div className='mainbody'>

      
      <h2>hey click on the button to open the modal</h2>
      <button className='openmodal' onClick={()=>setOpenModal(true)}>open modal</button>

      { openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default App