const ExponentThree = ({ exponentsCount }) => {

  const operator = exponentsCount ** 3

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentsCount}³</p>
      <p className="exponent-result">{exponentsCount} * {exponentsCount} * {exponentsCount} = <span className="total">{operator}</span></p>
    </div>

  )
};

export default ExponentThree;