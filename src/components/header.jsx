import ParticlesBg from "particles-bg";

export const Header = (props) => {
  
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="cobweb" bg={{ zIndex: 0, position: "absolute", top: 0 }} />
        {/* <img src={chome} width={100} height={100} alt='image not found' /> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1><a style={{ color: "#6372ff", fontWeight: "bold" }} >{props.data ? props.data.title : 'Loading'}</a>
                  <span></span>
                </h1>
                <p><a style={{ color: "white", fontWeight: "bold" }}>{props.data ? props.data.paragraph : 'Loading'}</a></p>
                <a
                  href='#services'
                  className='btn btn-custom btn-lg page-scroll'>Learn More</a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
