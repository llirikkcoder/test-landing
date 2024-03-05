import React from 'react';
import './Hero.scss';
// import '../../Template.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__wrap'>
          <div className='hero__two-columns'>
            <div className='hero__text-section'>
              <div className='hero__title'>
                Discover the vast expanses of <span>space</span>
              </div>
              <div className='hero__subtitle'>
                Where the possibilities are <span>endless!</span>
              </div>
              <button className='hero__button hero__button--primary'>Learn more</button>
            </div>
            <img className='hero__image' alt='hero' src='images/hero.png' />
          </div>

          {/* <div className='frame1248-banner'>
            <div className='frame1248-contentheader'>
              <span className='frame1248-text50'>
                <span className='frame1248-text51'>
                  Discover the vast expanses of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>space</span>
              </span>
              <span className='frame1248-text53'>
                <span className='frame1248-text54'>
                  Where the possibilities are
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>endless!</span>
              </span>
              <button className='frame1248-buttonsplaynow4'>
                <span className='frame1248-text56'>
                  <span>Learn more</span>
                </span>
              </button>
            </div>
            <div className='frame1248-earth'>
              <img
                src='/external/ellipse2068445-exeh-300h.png'
                alt='Ellipse2068445'
                className='frame1248-ellipse206'
              />
              <div className='frame1248-group48096608'>
                <div className='frame1248-group9'>
                  <img
                    src='/external/image3103107131earthmap3dpng28445-229b-400h.png'
                    alt='IMAGE3103107131earthmap3dpng28445'
                    className='frame1248-image3103107131earthmap3dpng2'
                  />
                </div>
                <img
                  src='/external/vectarytexture8445-zr0c-200h.png'
                  alt='Vectarytexture8445'
                  className='frame1248-vectarytexture1'
                />
              </div>
              <img
                src='/external/ellipse1948445-xze3-200h.png'
                alt='Ellipse1948445'
                className='frame1248-ellipse194'
              />
              <img
                src='/external/ellipse2028445-3j0g-200w.png'
                alt='Ellipse2028445'
                className='frame1248-ellipse202'
              />
              <img
                src='/external/ellipse2048445-gj2-200h.png'
                alt='Ellipse2048445'
                className='frame1248-ellipse204'
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
