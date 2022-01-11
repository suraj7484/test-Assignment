import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PopUpModal = ({ data, status, closeModal }) => {
  return (
    <Modal
      isOpen={status}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      closeTimeoutMS={200}
    >
      <div className="popUpModal" style={{ color: data.color }}>
        <div className="modal_Image_Section">
          <img
            src={data.urls.regular}
            alt="flex-gallery"
            height={data.height}
            width={data.width}
          />
        </div>
        <div className="modal_Content_Section">
          <button onClick={closeModal}>Close</button>
          <div className="author_Container">
            <div className="author_Image">
              <img src={data.user.profile_image.large} alt="" />
            </div>
            <div className="author_Data">
              <div className="author_Data_Layer">
                <label>Author :</label>
                <h5>{data.user.name}</h5>
              </div>
              <div className="author_Data_Layer">
                <label>Description :</label>
                <h5>{data.description}</h5>
              </div>
              <div className="author_Data_Layer">
                <label>Likes :</label>
                <h5>{data.likes}</h5>
              </div>
              <div className="author_Data_Layer">
                <label>Author's Bio :</label>
                <h5>{data.user.bio}</h5>
              </div>
              <div className="author_Data_Layer">
                <label>Total Photos :</label>
                <h5>{data.user.total_photos}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUpModal;
