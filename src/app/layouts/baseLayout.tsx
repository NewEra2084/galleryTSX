import { Outlet } from "react-router";
import { Header } from "../../Modules/header/header";
import { Footer } from "../../Modules/footer/footer";

type Props = {};

export const BaseLayout = ({}: Props) => {
  return (
    <>
      <Header/>
      <main className="dark:bg-secondary-dark h-[1000px]">
        <Outlet></Outlet>
      </main>
      <Footer/>
    </>
  );
};
