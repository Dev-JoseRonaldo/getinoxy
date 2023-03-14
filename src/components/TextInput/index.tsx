import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

import { containerStyle, inputStyle, labelStyle } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  className?: string
}

export const TextInput = ({
  label,
  value,
  name,
  className,
  ...rest
}: InputProps) => {
  const [animate, setAnimate] = useState(false)

  return (
    <div className={`${containerStyle} ${className}`}>
      <input
        {...rest}
        autoComplete="off"
        className={inputStyle}
        id={name}
        name={name}
        value={value}
        onFocus={() => setAnimate(true)}
        onBlur={() => (value ? setAnimate(true) : setAnimate(false))}
      />
      <label
        className={`
            ${labelStyle}
            ${
              animate || value
                ? 'top-[-0.215rem] text-[0.6rem] xs:text-[0.75rem] leading-[0.875rem]'
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
