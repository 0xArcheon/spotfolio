export default function Engagement({ data }) {
  return (
    <div
      className="integration rounded-xl text-pretty bg-green-200 bg-clip-padding h-max
       backdrop-filter backdrop-blur-3xl bg-opacity-30 font-normal py-6 px-8 max-md:px-4 max-md:py-3"
    >
      <div>
        <div className="title text-xl font-medium w-full mb-3">Engagement</div>
      </div>
      <p>{data}</p>
    </div>
  );
}
