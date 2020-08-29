import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import imagePlaceholder from "../../assets/images/placeholder-image.png";
import { uploadImage } from "../../services/upload.service";

const ImageUpload = ({ id, value, disabled }) => {
  const fileRef = useRef(null);

  const openFileRef = () => {
    fileRef.current.click();
  };

  const [imageValue, setImageValue] = useState("");

  useEffect(() => {
    setImageValue(value);
  }, [value]);

  const handleImageChange = async (event) => {
    try {
      const formData = new FormData();
      const data = event.target.files[0];

      formData.append("image", data);
      uploadImage(id, formData).then((response) => setImageValue(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={handleImageChange}
      />
      <img
        src={
          imageValue ? `data:image/jpeg;base64,${imageValue}` : imagePlaceholder
        }
        onClick={disabled ? undefined : openFileRef}
        className="img-fluid"
        alt="Avatar"
      />
    </div>
  );
};

ImageUpload.propTypes = {
  avatar: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ImageUpload;
