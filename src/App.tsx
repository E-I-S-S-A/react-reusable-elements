import React, { FormEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { EissaInputField } from './conponents/EissaInputField/EissaInputField';
import { DevTool } from "@hookform/devtools";

interface FormData {
  firstName: string;
  email: string;
  age: number;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    control
  } = useForm<FormData>(
    {
      mode: "all",
    }
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // You can handle your form data here
  };

  return (
    <div className="App" style={{width:"500px", padding:"5rem"}}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
        <EissaInputField<FormData>
          label="First Name"
          name="firstName"
          register={register}
          error={errors?.firstName}
          rules={{ required: "First name is required", maxLength:{message:"Not more than 5", value:5}, pattern:{value:/eissa/, message:"Should contain eissa"} }}
          isTouched={touchedFields.firstName}
        />
        <EissaInputField<FormData>
          label="Email"
          name="email"
          register={register}
          error={errors?.email}
          rules={{ required: "First name is required", maxLength:{message:"Not more than 5", value:5}, pattern:{value:/eissa/, message:"Should contain eissa"} }}
          isTouched={touchedFields.email}
        />
        <button type="submit">Sub</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
}


export default App;