type Props = {};

export const Pagination = (props: Props) => {
  return (
    <>
      <div className="absolute top-0 bottom-0 w-12 -left-[5vw]">
        <div className="rounded-lg h-72 w-12 bg-gray-400/30 after:top-0 after:absolute border-2 border-gray-500/50 sticky top-36">
          <button className="">...</button>
        </div>
        <div className="absolute top-0 bottom-0 right-[calc(50%-4px)] w-2  bg-Dark rounded-3xl"></div>
      </div>
    </>
  );
};
