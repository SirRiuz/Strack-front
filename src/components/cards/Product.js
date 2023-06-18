import '../../styles/cards/product.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'


const Product = props => {
  var cardRef = useRef(null)
  const setBorder = property => {
    if(cardRef.current !== null)
      cardRef.current.querySelector(
        '#product-info').style.textDecoration = property}

  return(
    <motion.div
      ref={e => cardRef.current = e}
      layoutId={props.layoutId}
      onClick={props.onClick}
      className={`product-card ${
        props.mode === 'large' ? 'large':''}`}
      style={{
        background: (
          props.mode === 'small' 
          || props.mode === undefined) ? 'green':'red'}}
      onMouseEnter={a => {
        setBorder("underline")
      }}
      onMouseLeave={a => {
        setBorder("none")
      }}
    >
      <div className={`product-card-shadow ${
        props.mode === 'large' ? 's-large':''}`}/>
      <div
        className={
          `product-card-header ${
            props.mode === 'large' ? 'h-large':''}`}>
        <div className={`product-score ${
          props.mode === 'large' ? 'ps-large':''}`}>
          <div className='score-incator'>
            <div>x</div>
            <div>x</div>
          </div>
        </div>
        {props.id}
      </div>

      <div
        className={`product-card-footer ${
          props.mode === 'large' ? 'f-large':''}`}
      />
      <div className={`product-content ${
        props.mode === 'large' ? 'i-large':''}`}>
        {/* Provider information */}
        <div className='product-prodiver'>
          <div className='product-prodiver-icon'/>
          <div style={{
            display:'flex',
            justifyContent:'center'}}>
            <span className='product-prov-origin'>
              mercadolibre.com
            </span>
          </div>
        </div>

        {/* Procuti information */}
        <div className='product-info'>
          <div>
            <span id='product-info' className={`product-info-name ${
              props.mode === 'large' ? 'n-large':''
            }`}>
              Waflera Estilo Belga Giratoria Black And Decker
            </span>
          </div>
          <div className='product-pracing'>
            <div>
              <span className='product-pracing-original'>$ 159.900</span>
            </div>
            <span style={{opacity:.8}}> · </span>
            <div>
              <span className='product-pracing-actual'>$ 119.900</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default Product
