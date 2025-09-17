import { useReducer } from "react";
import { Pagination } from "../../Modules/pagination/pagination";
import { List } from "../../Modules/PhotosList/list";
import { photosContext } from "../../Modules/PhotosList/store/listContext";
import { galleryReducer, init } from "../../Modules/PhotosList/store/galleryReducer";

export default function GalleryPage() {
  const [state, dispatch] = useReducer(galleryReducer, init)
  return (
    <photosContext.Provider value={[state, dispatch]}>
      <div className="md:flex relative">
        <Pagination />
        <List />
      </div>
    </photosContext.Provider>
  );
}
