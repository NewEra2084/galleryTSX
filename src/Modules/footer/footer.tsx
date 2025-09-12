type Props = {};

export const Footer = ({}: Props) => {
  return (
    <footer className="bg-main dark:bg-main-dark h-[300px] py-[5vh] justify-center flex gap-16">
      <div>
        <p className="text-3xl">GalleryTSX Company</p>
        <p className="text-xl">2025</p>
      </div>
      <div className="text-2xl pt-[10px]">
        <ul>
          <ol>Lorem, ipsum dolor.</ol>
          <ol>Lorem, ipsum dolor.</ol>
          <ol>Lorem, ipsum dolor.</ol>
          <ol>Lorem, ipsum dolor.</ol>
          <ol>Lorem, ipsum dolor.</ol>
        </ul>
      </div>
      <div className="text-2xl pt-[10px]">
        <ul>
          <ol>Lorem ipsum dolor sit amet.</ol>
          <ol>Nulla rerum commodi odit quaerat.</ol>
          <ol>Accusamus porro assumenda eveniet saepe?</ol>
          <ol>Similique recusandae aut cum architecto.</ol>
          <ol>Aliquid esse exercitationem odit iure.</ol>
        </ul>
      </div>
    </footer>
  );
};
