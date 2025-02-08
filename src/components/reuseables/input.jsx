
export const Input = ({type,value,onChange,placeholder}) => {
  return (
    <input
    className="border-[1px] border-gray-200 py-2 pl-3 rounded w-full outline-none"
     type={type} value={value} onChange={onChange} placeholder={placeholder} />
  )
}

export const TextArea = ({type,value,onChange,placeholder}) => {
    return (
      <textarea
      className="border-[1px] border-gray-200 py-2 pl-3 rounded w-full h-[150px] outline-none resize-none"
       type={type} value={value} onChange={onChange} placeholder={placeholder}>
        </textarea>
    )
  }
