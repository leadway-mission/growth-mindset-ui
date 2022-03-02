import { Carousel, Container } from "react-bootstrap"
const CarouselSection = () => {
    return <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://epe.brightspotcdn.com/fe/07/623f04754f06aff6f4b323fcedc9/growth-mindset-042021-1185654371.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/pyramid.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/rubber-bound.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default CarouselSection