import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

const Uploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 1000000, // Fixed typo: `maxSixe` -> `maxSize`
    onDrop: async (acceptedFiles) => {
      alert(acceptedFiles[0].name);
    },
  });

  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 pt-5 py-8 text-black border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <span className="mx-auto flexCol text-submain tex-3xl">
          <FiUploadCloud />
        </span>
        <p className="text-text text-xl mt-2">
          Drag your image here or click to upload
        </p>
        <em className=" text-lg text-border">
          <small>Only jpg, jpeg, png, gif files are allowed</small>
        </em>
      </div>
    </div>
  );
};

export default Uploader;
