import React from 'react'


export default function useErrors(){
  const [errors, setErrors] = React.useState([]);
  
  function setError({field,  message}){
    const errorAlreadyExists = errors.find((error) => error.fied === field);
    if(errorAlreadyExists) return
    setErrors((prev) => [...prev, {field, message}])
  }

  function removeError({ field }){
    setErrors((prev) => prev.filter((error) = error.field !== field))
  }

  function getErrorMessageByFiedName(fieldName){
     return errors.find((error) => error.fied === fieldName).message;
  }

  return { 
    errors,
    setError,
    removeError, 
    getErrorMessageByFiedName
  }
}