import { useState } from "react"


export const useForm = ( initialForm = {} ) => {

  const [form, setForm] = useState(initialForm);

  const onResetForm = () => {
   setForm( initialForm )
  }


  const onChangeField = (event) => { 
    let { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    })
  }


  return {
    ...form,
    form,
    // methods
    onChangeField,
    onResetForm,
  };
  
};
