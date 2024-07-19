import React from 'react';
import img1 from '../../public/images/testimonial/pic1.png';
import img2 from '../../public/images/testimonial/pic2.png';
import img3 from '../../public/images/testimonial/pic3.png';
import img4 from '../../public/images/testimonial/pic4.png';

const ProjectComponent = () => {
  const images = [img1, img2, img3, img4];
  return (
    <section className="happyclients">
    <div className="nwe-div">
      <div className="container headings text-center">
      <div className='head-block'>
                                    <h4 className="w-title">Projects Done
                                    </h4>
                                    <p className='w-title1'> eCommerce fulfilment perfected</p>
                                </div>
        <p className="text-capitalize pt-1">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          Distinctio expedita sapiente ratione iste fugiat magnam
                          autem eveniet corporis tempora minima?</p>
      </div>

      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          {images.map((img, index) => (
            <li
              key={index}
              data-target="#demo"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ul>

        <div className="carousel-inner container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
                  <div className="box">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <a href="#">
                      <img src={img} className="img-fluid img-thumbnail" />
                    </a>
                    
                    <p className="m-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          Distinctio expedita sapiente ratione iste fugiat magnam
                          autem eveniet corporis tempora minima?
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <p className="m-4">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites of the word in classical
                          literature, discovered the undoubtable source. Lorem
                          Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                          Finibus Bonorum et Malorum" (The Extremes of Good and
                          Evil) by Cicero, written in 45 BC. This book is a treatise
                          on the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum, "Lorem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
