import ParticlesBg from "particles-bg";
import coinage from "../../src/coinage.jpg"

export const Header = (props) => {
  // var coinage = require('../../src/coinage.jpg')
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="square" bg={{ zIndex: 0, position: "absolute", top: 0 }} />
        {/* <img src={coinage} width={1200} height={600} alt='image not found' /> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1><a style={{ color: "#6372ff", fontWeight: "bold" }} >{props.data ? props.data.title : 'Loading'}</a>
                  <span></span>
                </h1>
                <p><a style={{ color: "#6372ff", fontWeight: "bold" }}>{props.data ? props.data.paragraph : 'Loading'}</a></p>
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
