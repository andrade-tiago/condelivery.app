import GlobalButtonProps from "@/types/global-button-props"
import WhiteButton from "./WhiteButton"
import GradientButton from "./GradientButton"
import OutlineButton from "./OutlineButton"

const ButtonVariants = {
  white: WhiteButton,
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
