import { useState } from 'react';
import Card from './Card';

import styles from '../styles/Form.module.css'

const Form = () => {

	const [color, setColor] = useState('')
	const [hexColor, setHexColor] = useState('')

	const [error, setError] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (color.length < 3 || color.startsWith(' ')) {
			setError('Por favor chequea que la información sea correcta.')
			setSubmitted(false)
			return
		}
		if (hexColor.length < 6) {
			setError('Por favor chequea que la información sea correcta.')
			setSubmitted(false)
			return
		}

		setError('')
		setSubmitted(true)
	}

	return (
		<div className={styles.form_conatiner}>
			<h1 className={styles.form_title}>Let's some magic!</h1>
			<form
			className={styles.form_formContainer} 
			onSubmit={handleSubmit}
			>
				<div className={styles.form_labelInput}>
					<label>Type your favorite color: </label>
					<input
						type="text"
						id="color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</div>
				<div className={styles.form_labelInput}>
					<label>Type your favorite color in HEX format: </label>
					<input
						type="text"
						id="hexColor"
						value={hexColor}
						onChange={(e) => setHexColor(e.target.value)}
					/>
				</div>
				<button
				className={styles.form_btn}
				type="submit"
				>
					Send
				</button>
			</form>
			{
				error && <p> {error} </p>
			}
			{
				submitted && <Card color={color} hexColor={hexColor} />
			}
		</div>
	)
}

export default Form
