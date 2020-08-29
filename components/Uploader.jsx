import imageService from "../image-service";

function Uploader() {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && imageService.uploadImage(file);
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
