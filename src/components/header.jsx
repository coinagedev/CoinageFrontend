import ParticlesBg from "particles-bg";
import coinage from "../../src/coinage.jpg"

export const Header = (props) => {
  // var coinage = require('../../src/coinage.jpg')
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="thick" bg={{zIndex: 0, position:"absolute", top:0}} />
        {/* <img src={coinage} width={1200} height={600} alt='image not found' /> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
