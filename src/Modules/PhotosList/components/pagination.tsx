type Props = {}

export const Pagination = (props: Props) => {
  return (
    <div className="flex absolute top-0 bottom-0 -left-[5vw]">
      <div className="h-[100%] w-2 mx-auto bg-Dark rounded-3xl"></div>
      <div className="h-72 w-12 bg-amber-500 sticky top-36"></div>
    </div>
  )
}