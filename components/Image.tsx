// import NextImage, { ImageProps } from 'next/image'

// const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

// export default Image

// import NextImage, { ImageProps } from 'next/image'

interface IImageProps {
  alt: string
  src: string
  className?: string
  width?: number | string
  height?: number | string
}

const Image = ({ ...rests }: IImageProps) => <img {...rests} />

export default Image
