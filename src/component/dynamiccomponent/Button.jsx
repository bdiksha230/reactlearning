import React from 'react'

const Button = React.memo(({text, styletype}) => {

    const getButtonclass = () =>{
        switch (styletype) {
            case 'brownbtn':
                return 'btn brown-btn';
            case 'greybtn':
                return 'btn grey-btn';
            default:
                return 'btn';
        }
    }

  return (
    <button className={getButtonclass()} >{text}</button>
  )
})

export default Button
