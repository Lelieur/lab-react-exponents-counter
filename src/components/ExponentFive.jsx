const ExponentFive = ({ exponentsCount }) => {

  const operator = exponentsCount ** 5

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentsCount}⁵</p>
      <p className="exponent-result">{exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount}= <span className="total">{operator}</span></p>
    </div>

  )
};

export default ExponentFive;