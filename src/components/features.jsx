export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          {/* <h2>Download</h2> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <a href={d.link}>
                    <button type="button" class="btn btn-custom btn-sm page-scroll">{d.title}</button>
                  </a>
                  {/* <h3>{d.title}</h3>
                  <p>{d.text}</p> */}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
