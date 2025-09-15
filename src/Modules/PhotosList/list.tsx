import { useEffect, useState } from "react";
import { photosContext } from "./store/listContext";
import { getPhotos } from "./helpers/getPhotos";
import { Photo } from "./components/photo";

export const List = () => {
  const [photos, setPhotos] = useState<object[]>([]);

  useEffect(() => {
    (async () => {
      const req = await getPhotos();
      setPhotos(req);
    })();
    console.log(photos);
  }, []);

  return (
    <photosContext.Provider value={[photos, setPhotos]}>
      <div className="flex flex-col gap-y-5 gap-x-10 flex-wrap max-h-[100%]">
        {photos.length > 0 &&
          photos.map((item, id) => {
            return <Photo item={item} key={id} />;
          })}
      </div>
    </photosContext.Provider>
  );
};
