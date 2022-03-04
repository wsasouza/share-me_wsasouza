import emptyImage from '../assets/images/empty.png'

const EmptyList = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={emptyImage} alt="empty" className="w-64 h-64"/>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default EmptyList;