import { ButtonPropsInterface } from "../interfaces/ButtonProps.inteface.ts";
const Button = ({ children, ...props }: Partial<ButtonPropsInterface>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
