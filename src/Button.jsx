import PropTypes from 'prop-types'
export default function Button({textColor, bgColor, onClick, text}){
  return (
    <button 
      style={{backgroundColor: bgColor, color: textColor}} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  bgColor : PropTypes.string,
  textColor : PropTypes.string,
  text : PropTypes.string,
  onClick : PropTypes.func.isRequired
}