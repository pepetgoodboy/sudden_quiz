import Button from "../Atoms/Button/Button";

export default function NotFoundSection() {
  return (
    <>
      <div className="w-11/12 md:w-5/6 mx-auto h-[50svh] flex justify-center items-center">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-jakarta font-extrabold">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-700 md:text-lg">
            Sorry, but this page doesn’t exist. Would be a great place for a
            video, though.
          </p>
          <Button
            type="button"
            name="Home"
            link="/"
            variant="text-white font-semibold"
          />
        </div>
      </div>
    </>
  );
}
