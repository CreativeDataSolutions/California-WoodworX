import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/thumb'
import { Carousel_images } from '../constants/carousel'

const Gallery = ({ images = DEFAULT_IMAGES }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

  return (
    <div>
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          source={obj.source}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          position={obj.position}
          toggleLightbox={obj.toggleLightbox}
          position={i}
          toggleLightbox={toggleLightbox}
        />); 
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <div>
            <Carousel currentIndex={Carousel_images[selectedIndex].id} views={Carousel_images[selectedIndex]}/>
            <p align ="center">{images[selectedIndex].long_description}</p> 
            </div>
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
