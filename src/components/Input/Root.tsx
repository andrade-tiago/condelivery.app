import GlobalInputRootProps from "@/types/global-input-root-props"
import ElevatedInputLayout from "./ElevatedInput"
import OutlineInputLayout from "./OutlineInput"
import TransparentInputLayout from "./TransparentInput"

const InputVariants = {
  elevated: ElevatedInputLayout,
  outline: OutlineInputLayout,
  transparent: TransparentInputLayout,
}

type InputLayoutProps = GlobalInputRootProps & {
  variant: keyof typeof InputVariants,
}

const InputLayout: React.FunctionComponent<InputLayoutProps> = ({ variant, ...props }) => {
  const InputVariant = InputVariants[variant]

  return <InputVariant {...props} />
}
export default InputLayout
