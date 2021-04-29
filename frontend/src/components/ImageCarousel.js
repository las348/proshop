import React from 'react'
import { Carousel } from 'react-bootstrap'
import Christopher from './christopher-gower-_aXa21cf7rY-unsplash.jpg'
import Kari from './kari-shea-1SAnrIxw5OY-unsplash.jpg'
import Firmbee from './firmbee-com-gcsNOsPEXfs-unsplash.jpg'

const ImageCarousel = () => {


    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Christopher}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Find everything you need in one place</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kari}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Firmbee}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ImageCarousel