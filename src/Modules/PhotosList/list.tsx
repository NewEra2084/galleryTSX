import { useContext, useEffect } from "react";
import { photosContext } from "./store/listContext";
import type { State, Action } from "./store/galleryReducer";
import { getPhotos } from "./helpers/getPhotos";
import { Photo } from "./components/photo";

type reducer = [photos: State, dispatchPhotos: ({}: Action) => State | void];

export const List = () => {
  const [state, dispatchPhotos] = useContext<reducer>(photosContext);

  useEffect(() => {
    dispatchPhotos({ type: "setPage", page: 1 });
  }, []);
  useEffect(() => {    
    (async () => {
      const res = await getPhotos(state.page);
      dispatchPhotos({ type: "setPhotos", photos: res });
      
    })();
  }, [state.page]);

  return (
    <photosContext.Provider value={[state, dispatchPhotos]}>
      <div className="flex flex-col gap-y-5 gap-x-10 flex-wrap max-h-[100%]">
        {state.photos.length > 0 &&
          state.photos.map((item, id) => {
            return <Photo item={item} key={id} />;
          })}
      </div>
    </photosContext.Provider>
  );
};
