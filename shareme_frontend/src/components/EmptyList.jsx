import emptyImage from '../assets/images/empty.png';
import notSaveImage from '../assets/images/no-data.png';
import notFoundImage from '../assets/images/not-found.png';

const EmptyList = ({ image, message }) => {

  function getImage() {
    if (image === 'empty') {
      return emptyImage;
    } else if (image === 'notSave') {
      return notSaveImage;
    } else if (image === 'notFound') {
      return notFoundImage;
    } else {
      return emptyImage;
    }    
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={getImage()} alt="empty" className="w-64 h-64"/>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default EmptyList;