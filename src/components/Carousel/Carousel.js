import Haram1 from '../../pics/haram1-min.jpg';
import Haram2 from '../../pics/haram2-min.jpg';
import Haram3 from '../../pics/haram3-min.jpg';
import Haram4 from '../../pics/haram4-min.jpg';
import 'bootstrap/js/dist/carousel'

const Carousel = () =>
(
    <div id="demo" className="carousel slide" data-ride="carousel" data-interval="2500">

        <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
        </ul>
            
        <div className="carousel-inner d-block mx-auto">
        <div className="carousel-item active">
            <img className="w-75" src={Haram1} alt="Haram"/>
        </div>
        <div className="carousel-item">
            <img className="w-75" src={Haram2} alt="Haram"/>
        </div>
        <div className="carousel-item">
            <img className="w-75" src={Haram3} alt="Haram"/>
        </div>
        <div className="carousel-item">
            <img className="w-75" src={Haram4} alt="Haram"/>
        </div>
        </div>
            
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon bg-danger px-3 py-3"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon bg-danger px-3 py-3"></span>
        </a>
                
    </div>
)

export default Carousel;

