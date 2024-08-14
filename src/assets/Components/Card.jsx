const Card = ({color, hexColor}) => {
	const cardStyle = {
    border: '0.05rem solid black',
    padding: '6rem',
    marginTop: '5rem',
		height: '40vh',
    backgroundColor: hexColor,
    color: 'white'
  };
  return (
    <div style={cardStyle}>
      <h3>Magic!</h3>
      <p>Your favorite color is: {color}</p>
      <p>Your favorite color in hexadecimal is: {hexColor}</p>
    </div>
  )
}

export default Card