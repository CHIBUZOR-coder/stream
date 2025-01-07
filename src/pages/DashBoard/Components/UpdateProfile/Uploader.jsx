import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

const Uploader = ({ onFileUploaded, For, prviewSetter, MainImage }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: For === "video" ? true : false,
    maxSize: For === "video" ? 750000000 : 1000000,
    // accept: For === "video" ? "video/mp4" : "image/jpeg, image/png, image/gif",
    // onDrop: (acceptedFiles) => {
    //   const newFiles = acceptedFiles.map((file) => URL.createObjectURL(file));
    //   onFileUploaded(For === "video" ? newFiles[0] : newFiles); // Single file for images
    // },
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        console.error("Some files were rejected due to size or format.");
        console.log(rejectedFiles);
      }

      const previewFile = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      // onFileUploaded(For === "video" ? previewFile[0] : previewFile); // Single file for ima

      onFileUploaded(
        For === "video" ? acceptedFiles : acceptedFiles,
        previewFile,
        prviewSetter,
        MainImage
      );
    },
  });

  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 pt-5 py-8 text-black border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <span className="mx-auto flexCol text-submain text-3xl">
          <FiUploadCloud className="text-subMain" />
        </span>
        <p className="text-text text-xl mt-2">
          {For === "video"
            ? " Drag your  video here or click to upload"
            : " Drag your image here or click to upload"}
        </p>
        <em className=" text-lg text-border">
          {For === "video" ? (
            <small>mp4/video</small>
          ) : (
            <small>Only jpg, jpeg, png, gif files are allowed</small>
          )}
        </em>
      </div>
    </div>
  );
};

export default Uploader;
