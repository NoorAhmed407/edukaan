import React, { Component } from 'react';
import storcar1 from './../img/carousel/storcar1.jpg';
import storcar2 from './../img/carousel/storcar2.jpg';
import storcar3 from './../img/carousel/storcar3.jpg';
import storcar4 from './../img/carousel/storcar4.jpg';

export class Carousel extends Component {

    render() {
       
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={storcar1} className="d-block w-100" style={this.style} alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Mega Deals</h3>
                  <p>In our mega deals we offer upto 60% off.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={storcar2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Win A Free Phone</h3>
                  <p>Shop now to win a Phone</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={storcar3}  className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>We Provide all collections for childrens men and women</h3>
                  <p>On daily shopping we provide discount vouchers</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={storcar4} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )
    }
}

export default Carousel;
