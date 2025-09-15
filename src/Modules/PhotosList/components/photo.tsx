type Props = {
  item?: any;
};

export const Photo = ({ item }: Props) => {
  return (
    <div className="bg-third rounded-lg p-3 divide-y-2 divide-amber-500 w-fit pr-10">
      <div className="flex gap-[3vw] pb-3">
        <img
          src={item?.urls.small}
          alt="image"
          className="object-cover h-30%"
        />
        <div>
          <h2 className="text-2xl">{item?.user.name}</h2>
        </div>
      </div>
      <div>
        <h3 className="text-xl">Описание</h3>
        <h5>{item.description || "Автор не оставил описания"}</h5>
      </div>
    </div>
  );
};
