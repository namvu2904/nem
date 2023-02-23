export const parseDate  = (str) =>{
    let d = new Date(Date.parse(str))
    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}