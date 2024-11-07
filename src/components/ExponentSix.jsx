const ExponentSix = ({ exponentsCount }) => {

  const operator = exponentsCount ** 6

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentsCount}⁶</p>
      <p className="exponent-result">{exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount} * {exponentsCount}= <span className="total">{operator}</span></p>
    </div>

  )
};

export default ExponentSix;