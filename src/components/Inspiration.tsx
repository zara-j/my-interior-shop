
interface Image {
    src : string;
    alt: string;
}

interface InspirationProps {}

const Inspiration:React.FC<InspirationProps> = () => {
    const images: Image[] = 
    [
        {
        src: 'https://res.cloudinary.com/dxjjsfami/image/upload/v1737531399/inspire0_ehdoyf.jpg',
        alt:'inspiration-0'
    }, {
        src:'https://res.cloudinary.com/dxjjsfami/image/upload/v1737531387/inspire1_lmtobw.jpg',
        alt: 'inspiration-1'
    }, {
        src: 'https://res.cloudinary.com/dxjjsfami/image/upload/v1737531390/inspire2_i7wy75.jpg', 
        alt: 'inspiration-2'
    }, {
        src:   'https://res.cloudinary.com/dxjjsfami/image/upload/v1737531393/inspire3_la1w2n.jpg',
        alt: 'inspiration-3'
    }      
        ];

    return (
        <div className="bg-fuchsia-50 py-20">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-5">
                <div className="lg:text-left p-5 lg:w-[40%]">
                    <h1 className="text-5xl text-gray-700 font-bold lg:text-left">
                        50+ Beautiful rooms inspiration
                    </h1>
                    <p className="text-lg font-semibold text-muted my-6 lg:text-left">
                        Our designer already made a lot of beautiful room prototypes to inspire you.
                    </p>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-8 py-3">
                        Explore More
                    </button>
                </div>

                <div className="overflow-x-scroll scroll-smooth w-full lg:w-[50%]">
                    <div className="flex space-x-6">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className="min-w-[600px] lg:min-w-[400px] h-[450px] object-cover shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inspiration;
