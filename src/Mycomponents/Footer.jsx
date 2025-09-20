import React from 'react'

export const Footer = () => {
  // To add style in React
  let footerStyle = {
    backgroundColor : "black"
  }

  return (
    <footer className='text-white py-2 ' style={footerStyle}> 
      <p className="text-center">Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}
