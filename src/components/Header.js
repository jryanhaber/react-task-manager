import React from 'react'

import PropTypes from 'prop-types'


const Header = ({title}) => {
  return (
    <h1>Task tracker, {title}</h1>
  )
}

Header.defaultProps = {
  title: "task trappa"
}



export default Header
