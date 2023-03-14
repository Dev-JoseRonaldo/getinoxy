import Image from 'next/image'
import { Footer } from '../../components/Footer'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { MenuProps } from '../../components/Header/templates/menuTemplate'
import { Hero } from '../../components/Hero'
import { Highlight, HighlightProps } from '../../components/Highlight'
import { Resource, ResourceProps } from '../../components/Resource'
import { Separator } from '../../components/Separator'

import {
  AboutSectionContainerStyles,
  BgContactSectionStyles,
  ContactSectionContainerStyles,
  ContactSectionContentBoxStyles,
  ContactSectionImgStyles,
  FormContainerStyles,
  Highlight1ContainerStyles,
  MainContainerStyles,
  Resource1ContainerStyles,
  SeparatorContainerStyles
} from './styles'

interface ContactProps {
  bgContact: string
  urlImg: string
  altImg: string
}

export interface MainLayoutProps {
  menu: MenuProps[]
  resource: ResourceProps[]
  highlight: HighlightProps[]
  contact: ContactProps
}

export const MainLayout = ({
  menu,
  resource,
  highlight,
  contact
}: MainLayoutProps) => {
  return (
    <>
      <Header menu={menu} />
      <main className={MainContainerStyles} data-aos="fade">
        <Hero />
        <div className={Resource1ContainerStyles}>
          <Resource {...resource[0]} />
        </div>
        <div className={Highlight1ContainerStyles}>
          <Highlight {...highlight[0]} />
          <div className={SeparatorContainerStyles} data-aos="fade">
            <Separator />
          </div>

          <Highlight {...highlight[1]} />
        </div>
        <Resource {...resource[1]} />
        <section id="about" className={AboutSectionContainerStyles}>
          <Highlight {...highlight[2]} />
        </section>
        <section id="contact" className={ContactSectionContainerStyles}>
          <div className={BgContactSectionStyles}></div>
          <div className={ContactSectionContentBoxStyles}>
            <div className={FormContainerStyles}>
              <Form />
            </div>

            <div className={ContactSectionImgStyles}>
              <Image
                src={contact.urlImg}
                alt={contact.altImg}
                width={640}
                height={1070}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
