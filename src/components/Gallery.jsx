import '../assets/styles/Gallery.scss'

function Gallery() {
    const arrGrid =  Array.from(Array(3).keys()).slice(1)
    const arrImages = Array.from(Array(6).keys()).slice(1)

    return(
        <div className='galleryContainer'>
            <div className="slide-track">
                {arrGrid.map((grid) => (
                    <div key={grid} className={`slide grid${grid}`}>
                        {arrImages.map((image) => (<img key={image} src={`./gallery/img${image+(5*(grid-1))}.jpeg`} className={`image${image+(5*(grid-1))}`}/>))}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Gallery