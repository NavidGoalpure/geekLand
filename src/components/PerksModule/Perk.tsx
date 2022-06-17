import * as React from "react"
import { HTMLAttributes } from "react"
import { PerkStyles } from "./PerksModuleStyles"

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
  content: string
}

const Perk: React.FC<Props> = ({ children, title, content }) => {
  return (
    <PerkStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </PerkStyles>
  )
}

export default Perk
