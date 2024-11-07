
const Exponent = ({ num, exponent }) => {

    const result = num ** exponent
    const string = `${num} *`
    const operation = string.repeat(exponent)

    return (

        <div className="exponent-counter-container">
            <p className="exponent-label">{num}^{exponent}</p>
            <p className="exponent-result">{operation}<span className="total">{result}</span></p>
        </div>

    )


};

export default Exponent;