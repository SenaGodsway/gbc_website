import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"


export const OpeningTag = () => {
  return (
        <span className="inline-block text-3xl text-orange-400"><ImQuotesLeft/></span>
  )
}

export const ClosingTag = () => {
  return (
        <span className="inline-block text-3xl text-orange-400"><ImQuotesRight/></span>
  )
}