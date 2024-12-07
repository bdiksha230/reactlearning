import React, { useState } from 'react'

const Banner = React.memo(() => {
    const [bannerData, setbannerData] = useState([
        {
            id: 1,
            url: "https://media-cdn.tripadvisor.com/media/photo-o/14/10/2e/af/india.jpg",
            title: "image 1",
        },
        
    ]);


    // banner fetch from api *****

    // useEffect(() => {
    //     console.log("banner mounted");
    //     fetch('https://images.ctfassets.net')
    //     .then((res) => res.json())
    //     .then((bannerslink) => setbannerData(bannerslink))
    //     .catch((err) => console.log('failed to fetch banner', err));

    //     return () => {
    //         console.log("banner unmounted");
    //     }
    // }, []);
    // if(!bannerData) return <p>Loading...</p>


    return (
        <div className="banner">
            {bannerData.map((img, id) => (
                <div key="id" className="banner-wrap">
                    <img src={img.url} alt={img.title} className="banner-img w-100" />
                </div>
            ))}


        </div>
    )
})

export default Banner;
