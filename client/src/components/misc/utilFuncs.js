export const formatTitle = (title, maxLength=50) =>{
  if(title.length >= maxLength){
    const dots = '...'
    return title.slice(0, maxLength) + dots
  }
  return title
}

export const formatDate=(value)=>{
  const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  const date = new Date(value)
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const dateAndTime = `
  ${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}
  at ${date.getHours()}:${minutes} `
  return dateAndTime
}