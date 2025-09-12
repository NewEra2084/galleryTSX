import { NavLink } from "react-router";
import { Button } from "../../../shared/ui/button";

interface NavProps{
  to:string,
  children:string
}


const NavElement = ({to,children}:NavProps) => {
  return (
    <NavLink to={to} className={({isActive})=> isActive ? "active h-fit" : "pb-1 h-fit"}>
      <Button variant="small">{children}</Button>
    </NavLink>
  );
};

export const Navigation = () => {
  return (
    <nav className="flex items-center w-[100%] gap-5">
      <NavElement to="/">Главная</NavElement>
      <NavElement to="/search">Поиск</NavElement>
      <NavElement to="/favorites">Избранное</NavElement>
      <NavElement to="/gallery">Галлерея</NavElement>
      <NavElement to="/settings">Настройки</NavElement>
    </nav>
  );
};
