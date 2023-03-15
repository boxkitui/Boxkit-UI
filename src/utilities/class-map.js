const ClassInfo = (args) => {
    let classes = [];
    Object.keys(args)
        .filter((key) => {
            if (typeof args[key] === 'string') return classes.push(args[key])
            if (args[key]) return classes.push(key)
        })
    return classes.join(' ');
}

export const ClassMap = (args) => {
    let declaredClasses = ClassInfo(args);
    return declaredClasses;
}