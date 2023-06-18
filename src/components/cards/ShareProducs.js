import '../../styles/cards/shareProduct.css'
import { AnimatePresence, motion } from "framer-motion"
import { Grid } from "@mui/material";


const ShareProduct = props => {
  document.body.style.overflow = props.elementId !== null 
  ? 'hidden':'visible'
  document.addEventListener('keydown', e => {
    if(e.key === "Escape") {
      props.onClose()
    }
  })

    return(
    <AnimatePresence>
      {props.elementId && (
        <motion.div
          className="share-product"
          initial={{opacity: 0}}
          animate={{opacity:1}}
        >
          <div
            className="screen"
            onClick={() => {props.onClose()}}
          />
          <Grid container justifyContent="center">
            <Grid
              item
              md={6}
              height={{md:'650px'}}
              style={{zIndex:11}}
            >
              <motion.div
                className="share-product-modal"
                transition={{duration:.2}}
                layoutId={props.elementId}
              >
                <div>x</div>
                <div>x</div>
                <div>x</div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ShareProduct
