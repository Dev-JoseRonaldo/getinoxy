import {
  BgColorsVariants,
  CircleClass,
  SeparatorClass,
  SeparatorContainerStyles
} from './styles'

export interface SeparatorProps {
  variant?: 'primary' | 'secondary'
}

export const Separator = ({ variant = 'primary' }: SeparatorProps) => {
  const classNamesContainer =
    variant === 'primary'
      ? 'w-[80px] xs:w-[100px] sm:w-[140px] md:w-[183px]'
      : 'w-[240px] sm:w-[183px]'

  return (
    <div className={SeparatorContainerStyles}>
      <div
        className={`${BgColorsVariants[variant]} ${SeparatorClass} ${classNamesContainer}`}
      ></div>
      <div className="flex gap-3">
        <div className={`${BgColorsVariants[variant]} ${CircleClass}`}></div>
        <div className={`${BgColorsVariants[variant]} ${CircleClass}`}></div>
        <div className={`${BgColorsVariants[variant]} ${CircleClass}`}></div>
      </div>
      <div
        className={`${BgColorsVariants[variant]} ${SeparatorClass} ${classNamesContainer}`}
      ></div>
    </div>
  )
}
