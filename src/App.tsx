import React, { FormEventHandler, useState } from 'react';
import './App.css';
import { SubmitHandler, useForm } from "react-hook-form";
import EissaInputField from './components/EissaInputField/EissaInputField';
import { DevTool } from "@hookform/devtools";
import EissaButton from './components/EissaButton/EissaButton';
import EissaCheckbox from './components/EissaCheckbox/EissaCheckbox';
import EissaModal from './components/EissaModal/EissaModal';
import AddIcon from "./assets/svg/add.svg"
import EissaAvatar from './components/EissaAvatar/EissaAvatar';

interface FormData {
  firstName: string;
  email: string;
  age: number;
  showPassword: boolean
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

  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // You can handle your form data here
    handleClick()
  };

  function modalVisible() {
    setIsVisible(prev => !prev)
  }

  const handleClick = () => {
    setIsLoading(true);
    // Simulate an API call or any async task
    setTimeout(() => {
      setIsLoading(false);
      // alert('Action Completed!');
    }, 2000);
  };


  return (
    <div className="App" style={{ width: "500px", padding: "5rem" }}>
      <EissaAvatar CTA={()=>console.log("okok")} name='eissa' bg='red' fontColor='yellow' height={50} fontSize={30} img='https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg' />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <EissaInputField<FormData>
          // label="First Name"
          name="firstName"
          register={register}
          error={errors?.firstName}
          rules={{ required: "First name is required", maxLength: { message: "Not more than 5", value: 5 }, pattern: { value: /eissa/, message: "Should contain eissa" } }}
          isTouched={touchedFields.firstName}
          varient='secondary'
          placeholder='Fiest Name'
        // bg='red'
        />
        <EissaInputField<FormData>
          label="Email"
          name="email"
          register={register}
          error={errors?.email}
          rules={{ required: "This is req", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Should be email" } }}
          isTouched={touchedFields.email}
        />
        <div>h</div>
        <EissaCheckbox label='Show Password' name='showPassword'
          register={register} rules={{ required: { value: true, message: "This is required to accept" } }} isTouched={touchedFields.showPassword} error={errors?.showPassword} />
        <EissaButton label='Submit' type='submit' variant='secondary' isLoading={isLoading} />
        <EissaButton label='Submit' type='submit' variant='primary' isLoading={isLoading} />
      </form>
      <EissaModal ModalContent={() => {
        return <EissaButton label='Close' onClick={modalVisible} />
      }} isVisible={isVisible} />
      <EissaButton label='Open' variant='primary' onClick={modalVisible} />
      <DevTool control={control} />
      <EissaButton type='button' variant='primary' isLoading={isLoading} icon={AddIcon} bg='white' padding={5} borderColor='red' />
    </div>
  );
}


export default App;
