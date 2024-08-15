// import NextImage, { ImageProps } from 'next/image'

// const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

// export default Image

import { ImgHTMLAttributes } from 'react'

const Image = ({ ...rests }: ImgHTMLAttributes<HTMLImageElement>) => <img {...rests} />

export default Image
