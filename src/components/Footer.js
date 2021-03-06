import React from 'react';

function Footer() {
  return (
    <div className='row my-5 gy-4'>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <h5 className='text-muted mb-3 font-weight-bold'>About Us</h5> <hr />
        <h3 className='text-muted'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p>
          Aenean vulputate nisl arcu, non consequat risus vulputate sed. Nulla
          eu sapien condimentum nisi aliquet sodales non et diam. Duis blandit
          nunc semper rutrum congue. Phasellus sed lacus ut odio vehicula
          varius. Etiam iaculis feugiat tortor ac ornare.
        </p>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <h5 className='text-muted mb-3 font-weight-bold'>Trending Slider</h5>{' '}
        <hr />
        <div id='footer-slider' class='carousel slide' data-ride='carousel'>
          <ol class='carousel-indicators'>
            <li
              data-target='#footer-slider'
              data-slide-to='0'
              class='active'
            ></li>
            <li data-target='#footer-slider' data-slide-to='1'></li>
            <li data-target='#footer-slider' data-slide-to='2'></li>
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img
                src='https://constructionreviewonline.com/wp-content/uploads/2019/09/2019-09-20_5d84c7750c317_1l-image-Gerald-R.-Ford-International-Airport-Expansion-800x600.jpg'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src='https://blog.aci.aero/wp-content/uploads/2019/03/shutterstock_745544935-952x635.jpg'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src='https://www.marketplace.org/wp-content/uploads/2020/08/airport.jpg?fit=2880%2C1620'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class='carousel-control-prev'
            href='#footer-slider'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#footer-slider'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </a>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12 '>
        <h5 className='text-muted mb-3 font-weight-bold'>Hash Tags</h5> <hr />
        <div className='g-5'>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #DESIGN
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #TECHNOLOGY
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #ACCOUNTING
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #FINANCE
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #LIFESTYLE
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #COPUTER
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #BUSINESS
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #ECONOMICS
          </span>
          <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
            #NEWS
          </span>
        </div>
      </div>

      <div className='modal-footer  float-right mt-5 text-center'>
        Developer contact:{' '}
        <a href='mailto:ahmaat19@gmail.com'>ahmaat19@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;
