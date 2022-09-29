function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.card.name}
          </h5>
          <h6 className="card-price text-center">
            ${props.card.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.card.feature.map((item) => {
              return (
                <li>
                  <div className="line">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    <b>{item.line2}</b>
                  </div>
                  <div className="line">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {item.line}
                  </div>
                  <div className="line1 text-muted">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {item.line1}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
