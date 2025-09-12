import { Outlet } from "react-router";
import { Header } from "../../Modules/header/header";
import { Footer } from "../../Modules/footer/footer";

type Props = {};

export const BaseLayout = ({}: Props) => {
  return (
    <>
      <Header/>
      <main className="dark:bg-main-dark min-h-[90vh] py-7">
        <Outlet></Outlet>
      </main>
      <Footer/>
    </>
  );
};
