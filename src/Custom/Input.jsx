export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full mt-2 px-6 p-4 text-white border border-border rounded ${
          bg ? "bg-main" : "bg-dry"
        }`}
      />
    </div>
  );
};
