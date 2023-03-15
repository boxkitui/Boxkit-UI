import { ClassMap } from "../class-map";

export const ButtonClasses = (props) => {
    const {
        block,
        theme,
        size,
        type,
        icon,
        rightIcon,
        disabled,
        touchRipple,
        className
    } = props

    const classes = {
        ios: 'inline-flex text-center justify-center items-center appearance-none py-2 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10 relative duration-300 font-medium px-6 rounded-full text-md-light-on-primary dark:text-md-dark-on-primary bg-md-light-primary dark:bg-md-dark-primary touch-ripple-white dark:touch-ripple-primary text-sm h-10',
        className: props.className
    };
    let exportClasses = ClassMap(classes)
    return exportClasses
}