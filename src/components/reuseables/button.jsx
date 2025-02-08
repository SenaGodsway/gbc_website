import { Link } from "react-router-dom"

export const RoundButton = ({href, children}) => {
  return (
    <span className="inline-block border-2 rounded-full cursor-pointer"> 
        <Link to={href} className="flex items-center gap-6 px-6 py-3">{children}</Link>
    </span>
  )
}
