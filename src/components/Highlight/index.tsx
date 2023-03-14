import {
  HighlightBoxStyles,
  HighlightContainerStyles,
  HighlightListContainerStyles,
  HighlightListItemContainerStyles,
  HighlightListTextStyles,
  HighlightTextStyles,
  HighlightTitleStyles
} from './styles'

export interface HighlightProps {
  title: string
  content: string | string[]
  inverterAlign?: boolean
}

export const Highlight = ({
  title,
  content,
  inverterAlign = false
}: HighlightProps) => {
  const BoxClassNames = !inverterAlign
    ? 'justify-end pl-4 pr-10 sm:pl-16 sm:pr-20 md:pl-24 lg:pr-24'
    : 'pr-4 pl-10 sm:pl-16 sm:pr-16 md:pl-20 md:pl-24'

  const ContainerClassNames = inverterAlign
    ? 'before:left-[-30px] sm:before:left-[-56px]'
    : 'before:right-[-30px] sm:before:right-[-56px]'

  const TitleClassNames = inverterAlign ? 'text-start' : 'text-end self-end'

  const typeAnimation = 'fade-down'

  return (
    <div
      className={`${HighlightBoxStyles} ${BoxClassNames}`}
      data-aos={typeAnimation}
    >
      <div className={`${HighlightContainerStyles} ${ContainerClassNames}`}>
        <h2
          className={`${HighlightTitleStyles} ${TitleClassNames}`}
          data-aos={typeAnimation}
        >
          {title}
        </h2>
        {typeof content === 'string' ? (
          <p className={HighlightTextStyles} data-aos={typeAnimation}>
            {content}
          </p>
        ) : (
          <ul className={HighlightListContainerStyles} data-aos={typeAnimation}>
            {content.map(item => (
              <li key={item} className={HighlightListItemContainerStyles}>
                <span className={HighlightListTextStyles}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
