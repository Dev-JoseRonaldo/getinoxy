import { GetStaticProps } from 'next'
import { menuMock } from '../components/Header/mock'
import { HighlightMock } from '../components/Highlight/mock'
import { ResourceMock } from '../components/Resource/mock'
import { MainLayout, MainLayoutProps } from '../layout/Main'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menu: menuMock,
      resource: ResourceMock,
      contact: {
        urlImg:
          'https://res.cloudinary.com/devjoseronaldo/image/upload/v1673808065/getingoxy/girl-contact_apzvv3.png',
        altImg:
          'Menina branca, cabelo liso e preto, mexendo no celular e sorrindo.'
      },
      highlight: HighlightMock,
      revalidate: 60 * 60 * 24 // 86400 seconds = 24 hours
    }
  }
}
