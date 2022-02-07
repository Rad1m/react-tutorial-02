import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {

}
const defaultState = {
  people:[],
  isModalOpen: false,
  modalContent:'Hello World'
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [showModal, setShowModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      
    } else {
      
    }
  }

  return (
    <>
    {state.isModalOpen && <Modal/>}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type ='text' value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {state.people.map((person)=>{
      return (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      )
    })}
    </>
  )
};

export default Index;
