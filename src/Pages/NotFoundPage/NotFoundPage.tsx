type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <p className="text-5xl text-right text-Dark dark:text-White">The page doesn't exist {":("} <br/> <span>Error 404</span></p>
    </div>
  );
}
