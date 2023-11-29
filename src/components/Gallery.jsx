import '../assets/styles/Gallery.scss'

function Gallery({nbr}) {
    const arr = Array.from(Array(6).keys()).slice(1)

    return(
        <div className='galleryContainer'>
            <div className="slide-track">
                <div className={`slide grid${nbr}`}>
                    {arr.map((image) => (<img key={image} src={`./gallery/img${image*nbr}.jpeg`} className={`image${image}`}/>))}
                </div>
            </div>
        </div>
    )
}

export default Gallery