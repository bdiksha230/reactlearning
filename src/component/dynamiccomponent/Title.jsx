import React from 'react'

const Title = React.memo(({ text, styletype }) => {

    const getTitleclass = () => {
        switch (styletype) {
            case 'headingh1':
                return 'h1-brown';
            case 'headingh2':
                return 'h2-brown';
            case 'headingh3':
                return 'h3-brown';
            default:
                return 'text-black';
        }
    }

    return (
        <h2 className={getTitleclass()}>{text}</h2>
    )
})

export default Title
