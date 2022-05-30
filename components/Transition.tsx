import { PageVariants } from 'animations/page-var'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

const Transition: FC = ({ children }) => {
  return (
    <motion.div
      variants={PageVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  )
}

export default Transition
