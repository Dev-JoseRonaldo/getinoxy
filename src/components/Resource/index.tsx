import Image from 'next/image'

import { ResourceContainerStyles, ResourceContentBoxStyles } from './styles'

export interface ResourceProps {
  title: string
  imgUrl: string
  imgAlt: string
  imgWidth?: number
  classNames?: string
  inverterOrder?: boolean
}

export const Resource = ({
  title,
  imgUrl,
  imgAlt,
  imgWidth,
  inverterOrder = false,
  classNames = ''
}: ResourceProps) => {
  const classNamesImage = inverterOrder
    ? 'right-0 top-[-30px] max-w-[200px] xs:max-w-[250px] sm:max-w-[350px]'
    : 'left-2 sm:left-[16px] md:left-[50px] sm:top-[-200px] max-w-[150px] xs:max-w-[200px] sm:max-w-[250px]'

  const classNamesTitleBox = inverterOrder
    ? 'justify-start w-[93%] px-6 xl:px-24 min-w-[99%] md:min-w-[95%] xl:min-w-[90%]'
    : 'justify-end w-[73%] px-6 min-w-[99%] md:min-w-[90%] lg:min-w-[876px]'

  const classNamesTitle = inverterOrder
    ? ' text-start max-w-[100px] xs:max-w-[150px] sm:max-w-[370px] md:max-w-[470px]'
    : ' text-end max-w-[200px] sm:max-w-[470px]'

  const classNamesContainer = inverterOrder ? 'justify-end' : 'justify-start'

  const classNamesBox = inverterOrder
    ? 'before:right-0 before:top-2'
    : 'before:left-0 before:top-0'

  const typeAnimationTitle = inverterOrder ? 'fade-left' : 'fade-right'

  return (
    <div
      className={`${ResourceContainerStyles} ${classNamesBox}`}
      data-aos={inverterOrder ? 'fade' : ''}
    >
      <div
        className={`${ResourceContentBoxStyles} ${classNamesContainer} ${classNames}`}
      >
        <div className={`bg-primary flex ${classNamesTitleBox}`}>
          <h2
            className={`${classNamesTitle} lg:text-center font-title font-bold text-white py-4 xs:py-6 sm:py-[34px] text-base xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl`}
            data-aos={typeAnimationTitle}
          >
            {title}
          </h2>
        </div>
        <div className={`absolute ${classNamesImage} lg:max-w-full`}>
          <Image src={imgUrl} alt={imgAlt} width={imgWidth} height={600} />
        </div>
      </div>
    </div>
  )
}
