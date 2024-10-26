
# Eissa React UI Elements

A collection of reusable and customizable React UI components, designed to simplify form handling and UI building in React applications using react-hook-form.

## Demo

![Demo](https://drive.google.com/file/d/1uKdfLO9pQw9CsmF1StLjV7E_YbgKIBzY/view?usp=sharing)

## Color of your choice

![Color 1](https://drive.google.com/file/d/1kSwERHU3bU3V2e_DgfItdeYvHugdm7PK/view?usp=sharing)
![Color 2](https://drive.google.com/file/d/1gs4coVMmzIP3eR48LoEWhVpTvmgJZ8gT/view?usp=sharing)

Or any other color your like :)


## Components
1. EissaInputField: A custom input field component that integrates with React Hook Form for form handling and validation.
2. EissaButton: A versatile button component that supports different variants and a loading state for async actions.
## Installation

```
npm install @eissafaheem/react-ui-elements
```

or with yarn

```
yarn add @eissafaheem/react-ui-elements
```

## Example Usage

### Theme Color

In `index.css` for whole app, or in `MyComponent.module.css` when only sepecific for `MyComponent`
```typescript
:root {
  --brand-color: green;
} 
```

### Form handling

`MyComponent.tsx`

```typescript
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EissaButton, EissaInputField } from '@eissafaheem/react-ui-elements';
import styles from './MyComponent.module.css';

interface FormData {
    name: string;
    email: string;
    age: number;
}

function MyComponent() {
    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<FormData>({
        mode: "all",
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            alert(`Name: ${data.name}\nEmail: ${data.email}\nAge: ${data.age}`);
            setIsLoading(false)
        }
            , 2000);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className={styles.container}>
            <h1>Enter your details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EissaInputField<FormData>
                    label="Name"
                    name="name"
                    register={register}
                    error={errors?.name}
                    rules={{ required: "Name is required" }}
                    isTouched={touchedFields.name}
                />
                <EissaInputField<FormData>
                    label="Email"
                    name="email"
                    register={register}
                    error={errors?.email}
                    rules={{ required: "Email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Invalid email format" } }}
                    isTouched={touchedFields.email}
                />
                <EissaInputField<FormData>
                    label="Age"
                    name="age"
                    register={register}
                    error={errors?.age}
                    rules={{ required: "Age is required", min: { value: 1, message: "Age must be positive" } }}
                    isTouched={touchedFields.age}
                />
                <EissaButton label="Submit" type="submit" variant="primary" isLoading={isLoading} />
                <EissaButton label="Reset" type="button" variant="secondary" onClick={handleReset} />
            </form>
        </div>
    );
}

export default MyComponent;

```

`MyComponent.module.css`

```css
:root {
    --brand-color: green;
}

.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30rem;
}
```


## Contributing

Contributions are always welcome!

If you have ideas, improvements, or bug fixes, feel free to submit a pull request. Your contributions are highly appreciated.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request for review.

Thank you for helping improve this project!
