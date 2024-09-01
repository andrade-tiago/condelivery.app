import GlobalButtonProps from "@/types/global-button-props"
import FullButton from "./FullButton"
import GradientButton from "./GradientButton"
import OutlineButton from "./OutlineButton"

const ButtonVariants = {
  full: FullButton,
  gradient: GradientButton,
  outline: OutlineButton,
}

type ButtonProps = GlobalButtonProps & {
  variant: keyof typeof ButtonVariants,
}

const Button: React.FunctionComponent<ButtonProps> = ({ variant, ...props }) => {
  const ButtonVariant = ButtonVariants[variant]

  return <ButtonVariant {...props} />
}
export default Button
