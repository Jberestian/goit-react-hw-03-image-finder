import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, largeImageURL, onClick }) => {
  return (
    <li className="imageGalleryItem" onClick={() => onClick(largeImageURL)}>
      <img src={src} alt="imageName" className="imageGalleryItem" id={id} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
