import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ButtonClasses } from '../../utilities/classes/ButtonClasses';

const Button = forwardRef((props, ref) => {
    const {
        block,
        disabled,
        className,
        size,
        type,
        touchRipple,
        icon,
        theme,
        children,
        ...rest
    } = props

    let classes = ButtonClasses(props)

    return (
        <button className={classes}>{children}</button>
    )
})

export default Button;