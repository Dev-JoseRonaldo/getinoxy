import { ChangeEvent, TextareaHTMLAttributes, useState } from 'react'

import { containerStyle, inputStyle, labelStyle } from './styles'

export interface InputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

export const TextAreaInput = ({ label, value, name, ...rest }: InputProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <div className={containerStyle}>
      <textarea
        {...rest}
        className={inputStyle}
        id={name}
        name={name}
        value={value}
        onFocus={() => setAnimate(true)}
        onBlur={() => (value ? setAnimate(true) : setAnimate(false))}
        rows={10}
        cols={20}
      ></textarea>
      <label
        className={`
            ${labelStyle}
            ${
              animate || value
                ? 'top-[-0.215rem] text-[0.75rem] leading-[0.875rem]'
                : 'top-1 text-[0.875rem] xs:text-[1.125rem] leading-[1.3125rem]'
            }
          `}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  )
}
