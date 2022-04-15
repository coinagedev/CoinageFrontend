export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Mining Pool</h2>
          {/* <a href={"http://google.com"}>Coinage Mining Pool</a> */}
          <a href="http://google.com">
            <button type="button" class="btn btn-custom btn-lg page-scroll">
              Coinage Mining Pool
            </button>
          </a>
        </div>
        <div className="row">
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'} */}
        </div>
      </div>
    </div>
  );
};
