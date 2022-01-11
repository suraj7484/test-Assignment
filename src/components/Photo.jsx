import React from 'react'
import PopUpModal from './PopUpModal';

const Photo = (props) => {
  const { data } = props;
  
  const [modalOpen, setModalOpen] = React.useState(false)

  const modalFunction = () => {
    setModalOpen(!modalOpen)
  }
  
  return (
    <>
      <img
        src={data.urls.thumb}
        alt="flex-gallery"
        height={data.height / 30}
        width={data.width / 30}
        onClick={modalFunction}
      />
      <PopUpModal data={data} status={modalOpen} closeModal={modalFunction}/>
    </>
  );
}

export default Photo
