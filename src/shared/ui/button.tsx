type Props = {
  children: React.ReactNode;
  variant: string
}
type variants = Record<"small" | "md" | "big", string>;
const Variants: variants = {
    small: "p-2",
    md: "p-4",
    big: "p-8"
};

export const Button = ({children, variant}:Props) => {
  const buttonVar = Variants[variant];
  return (
    <button className={buttonVar}>
      {children}
    </button>
  )
}