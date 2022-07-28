import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './carousel.styles.css'
import { Carousel } from 'react-responsive-carousel';
import Banner1 from './Banner1.jpg'

const CarouselComp = () => {

    return(
        <Carousel>
                <div className="container">
                    <img className="banner" src={Banner1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foxtrendingnews.com%2Fupload%2Fmedia%2Fposts%2F2021-04%2F29%2Ftop-10-best-muscle-cars-of-all-time_1619698720-b.jpg&f=1&nofb=1" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F04%2F06%2F350545-landscape-river.jpg&f=1&nofb=1" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    )
}

export default CarouselComp;