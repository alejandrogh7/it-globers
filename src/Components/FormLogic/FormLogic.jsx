import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import arrow from '../../utils/right-arrow.png';

export const validate = (value) => {
	const errors = {};

	if(!value.length) {
			errors.email = "Email is required";
		} else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
			errors.email = "Email is not valid direction"
		}

	return errors;
}

export default function Form() {
	const [state, handleSubmit] = useForm("xwkzbkqp");
	const [isSubmit, setIsSubmit] = useState(false);
	const [formErrors, setFormErrors] = useState({});

		if (state.succeeded) {
      return <p className="submited">Thanks for joining!</p>;
  }

	const onChange = (e)=> {
		setFormErrors(validate(e.target.value));
		if(Object.keys(formErrors) === 0) {
			setIsSubmit(true)
		}
	}

	return (
				<form onSubmit={handleSubmit} className="data" onChange={(e) => onChange(e)} disabled={!isSubmit ? true :  false}>
					<input 
						id="email"
						type="text"
						name="email"
						placeholder="Ingresa tu email"
						className={`${Object.keys(formErrors).length === 0 ? "" : "error"} `}
						required={true}
					/>
					<img src={arrow} alt="submit" className="arrow" onClick={handleSubmit}/>
					<ValidationError 
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</form>
	);
}
