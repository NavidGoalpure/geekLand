import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  to?: string
  as?: HTMLElement | unknown
  arrow?: boolean
}
const Button: React.FC<Props> = ({ text, to, as, arrow }) => {
  return (
    <ButtonStyles className="btn" as={as} to={to}>
      {text}
      {arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
    </ButtonStyles>
  )
}

export default Button
