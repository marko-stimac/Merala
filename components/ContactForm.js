import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

// Messages
const required = 'This field is required.';
const validEmail = 'Valid email is required.';

// Error Component
const errorMessage = error => {
	return <div className="input-error">{error}</div>;
};

export default () => {
	const { register, handleSubmit, errors } = useForm();

	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);

	function onSubmit(data, e) {
		fetch(`${process.env.SITEURL}/send-email`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(res => {
				e.target.reset();
				setSuccess(true);
				setFailure(false);
			})
			.catch(err => {
				console.error('Sending ERROR:', err);
				setSuccess(false);
				setFailure(true);
			});
	}

	return (
		<>
			<form
				id="contact-form"
				onSubmit={handleSubmit(onSubmit)}
				method="POST"
			>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="Name"
						ref={register({ required: true })}
					/>
					{errors.Name && errorMessage(required)}
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="Email"
						aria-describedby="emailHelp"
						ref={register({
							required: 'Required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address'
							}
						})}
					/>
					{errors.Email &&
						errors.Email.message &&
						errorMessage(validEmail)}
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						rows="5"
						id="message"
						name="Message"
						ref={register({ required: true })}
					/>
					{errors.Message && errorMessage(required)}
				</div>
				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="acceptance"
							name="Acceptance"
							ref={register({ required: true })}
						/>
						<label
							className="custom-control-label"
							htmlFor="acceptance"
						>
							Please check if you agree with our {" "}
							<Link href="/[slug]" as="/privacy-policy/">
								<a>Privacy policy</a>
							</Link>
						</label>
					</div>
					{errors.Acceptance && errorMessage(required)}
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				{success && (
					<div className="message message--success">
						Message was sent, we will reach you shortly.
					</div>
				)}
				{failure && (
					<div className="message message--failure">
						Message could not be sent, try again later.
					</div>
				)}
				<style>
					{`
						form {
							margin-bottom: 50px;
						}
						.input-error {
							margin-top: 5px;
							color: #f01;
							display: inline-block;
						}
						.message {
							margin-top: 20px; 
						}
						.message--success {
							color: green;
						}
						.message--failure {
							color: #f01; 
						}
					`}
				</style>
			</form>
		</>
	);
};
