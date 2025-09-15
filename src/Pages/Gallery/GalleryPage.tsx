import { Pagination } from "../../Modules/PhotosList/components/pagination";
import { List } from "../../Modules/PhotosList/List";

type Props = {};

export default function GalleryPage({}: Props) {
  return (
    <div className="md:flex relative">
      <Pagination />
      <List />
    </div>
  );
}
