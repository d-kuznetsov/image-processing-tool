import axious from "axios";

function Uploader(props) {
  const { beforeImgUpload, afterImgUpload } = props;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && uploadImg(file);
  };
  const uploadImg = (file) => {
    beforeImgUpload();
    const formData = new FormData();
    formData.append("image", file);
    axious.post("api/image", formData).then(() => {
      afterImgUpload();
    });
  };

  return (
    <div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="Uploader-fileInput"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="Uploader-label">
        <button className="Uploader-addImage">+</button>
      </label>
    </div>
  );
}

export default Uploader;
