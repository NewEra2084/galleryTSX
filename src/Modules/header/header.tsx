import { Theme } from "./Theme"

type Props = {}

export const Header = ({}: Props) => {
  return (
    <header className="bg-main-blue dark:bg-main-dark">
      <Theme/>
    </header>
  )
}