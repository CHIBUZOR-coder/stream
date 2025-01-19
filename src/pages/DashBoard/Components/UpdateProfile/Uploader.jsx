import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
const Uploader = ({
  onFileUploaded,
  For,
  prviewSetter,
  MainImageSetter,
  MainVideoSetter,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      let previewFile;

      acceptedFiles.forEach((file) => {
        console.log("Raw File Object:", file); // Raw file (blob) is what you need
        previewFile = URL.createObjectURL(file);
        if (For === "video") {
          onFileUploaded(file, previewFile, prviewSetter, MainVideoSetter); // Pass the raw file directly
        } else {
          console.log(typeof MainImageSetter);
          onFileUploaded(file, previewFile, prviewSetter, MainImageSetter); // Pass the raw file directly
        }
      });
    },
    [For, onFileUploaded, prviewSetter, MainImageSetter, MainVideoSetter]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "md:h-[179.2px] h-auto bg-textt border-subMain" : ""
        }  px-6 pt-5 py-8 text-black border-2 border-border border-dashed bg-main rounded-md cursor-pointer`}
      >
        <label htmlFor={For === "video" ? "video" : "image"} className="w-full">
          <input
            {...getInputProps({ name: For === "video" ? "video" : "image" })}
          />
        </label>

        {isDragActive ? (
          <p></p>
        ) : (
          <div>
            <span className="mx-auto flexCol text-submain text-3xl">
              <FiUploadCloud className="text-subMain" />
            </span>
            <p className="text-text text-xl mt-2">
              {For === "video"
                ? " Drag your video here or click to upload"
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
        )}
      </div>
    </div>
  );
};

export default Uploader;
