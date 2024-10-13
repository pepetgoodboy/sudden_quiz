import Spinner from "react-spinner-material";

export default function ButtonAuth({ isLoading, name }) {
  return (
    <>
      <button
        type="submit"
        className="flex justify-center items-center px-4 sm:px-8 py-3 bg-primary rounded-lg text-white"
      >
        {isLoading ? (
          <Spinner radius={20} color={"#ffffff"} stroke={2} visible={true} />
        ) : (
          name
        )}
      </button>
    </>
  );
}
