import { ButtonHTMLAttributes } from 'react'
import { ButtonClasses, ButtonSizes, ButtonVariants } from './styles'

type BaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
>

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'flexible' | 'full'
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const classNames = `${ButtonClasses} ${size && ButtonSizes[size]} ${
    variant && ButtonVariants[variant]
  } ${className ?? ''}`

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
