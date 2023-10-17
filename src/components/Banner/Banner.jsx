import car1 from '../../assets/01.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} className="w-full h-screen" />
                </div>
            </div>
        </div>
    );
};

export default Banner;