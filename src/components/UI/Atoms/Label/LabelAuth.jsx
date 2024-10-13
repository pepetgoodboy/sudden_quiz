export default function LabelAuth({ htmlFor, text }) {
  return (
    <>
      <label htmlFor={htmlFor}>{text}</label>
    </>
  );
}
