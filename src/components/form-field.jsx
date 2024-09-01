import {useRef, useState, useContext} from 'react'
import '../components-styles/personal-info.scss'
import { InputValidityContext } from './contexts.jsx';


function FormField(props) {
  const {labelFor, labelText, inputType, inputName, inputPlaceholder, inputRegexPattern} = props;
  const inputFieldRef = useRef(null);
  const {setValidity} = useContext(InputValidityContext);

  // Validates the input fields
  function validateInput() {
    const currentFieldWarningTxt = inputFieldRef.current.previousElementSibling.querySelector('.required');
    // display warning if input field is empty
    if (inputFieldRef.current.value == '') {
      inputFieldRef.current.style.border='1px solid red'
      currentFieldWarningTxt.style.display='block';
    }else {
      // remove warning if field is not empty
      inputFieldRef.current.style.border='1px solid hsl(243, 100%, 62%)';
      currentFieldWarningTxt.style.display='none';
    }
    // checks if the input field is not valid
    if (!inputFieldRef.current.checkValidity()){
      inputFieldRef.current.style.border='1.6px solid red';
      setValidity(false)
    }else{
      setValidity(true)
    }
  }


  return (
    <>
    <label htmlFor={labelFor}>{labelText} <span className='required'>This field is required *</span></label>
    <input type={inputType} id={labelFor} ref={inputFieldRef} onInput={validateInput} className='input-field' name={inputName} placeholder={inputPlaceholder} pattern={inputRegexPattern} required autoComplete='on'/>
    </>
  )
}

export default FormField