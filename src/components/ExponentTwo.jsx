const ExponentTwo = ({ exponentsCount }) => {

  const operator = exponentsCount ** 2

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentsCount}²</p>
      <p className="exponent-result">{exponentsCount} * {exponentsCount}= <span className="total">{operator}</span></p>
    </div>

  )


};

export default ExponentTwo;