export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>WHAT IS COINAGE?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph01 : 'loading...'}</p>
              <h3>COINAGE CRYPTOCURRENCY</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.KEYWORDS.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.TECHNOLOGIES.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.FEATURES.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.COINDIST.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
