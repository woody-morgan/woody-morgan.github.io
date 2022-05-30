import { Variants } from 'framer-motion'

export const PageVariants: Variants = {
  hidden: { opacity: 0, x: -500, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 500, y: 0 },
}
