export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a style={{ color: "#6372ff" }} className='navbar-brand page-scroll' href='#page-top'>COINAGE</a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a style={{fontWeight: "bold"}} href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a style={{fontWeight: "bold"}} href='#services' className='page-scroll'>
                Prospect
              </a>
            </li>
            <li>
              <a style={{fontWeight: "bold"}} href='#features' className='page-scroll'>
                Resource
              </a>
            </li>
            <li>
              <a style={{fontWeight: "bold"}} href='#portfolio' className='page-scroll'>
                Explorer
              </a>
            </li>
            <li>
              <a style={{fontWeight: "bold"}} href='#testimonials' className='page-scroll'>
                Mining Pool
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a style={{fontWeight: "bold"}} href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
