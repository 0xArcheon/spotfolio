export default function Engagement({ data }) {
  return (
    <div
      className="integration rounded-xl text-pretty bg-green-200 bg-clip-padding h-max
       backdrop-filter backdrop-blur-3xl bg-opacity-0 font-normal py-8 px-8 max-md:px-4 max-md:my-6"
    >
      <p>{data}</p>
    </div>
  );
}
