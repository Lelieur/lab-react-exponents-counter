const ExponentFour = ({ exponentsCount }) => {

  const operator = exponentsCount ** 4

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentsCount}⁴</p>
      <p className="exponent-result">{exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount}= <span className="total">{operator}</span></p>
    </div>

  )
};

export default ExponentFour;