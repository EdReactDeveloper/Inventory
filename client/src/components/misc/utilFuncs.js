export const formatTitle = (title, maxLength=50) =>{
  if(title.length >= maxLength){
    const dots = '...'
    return title.slice(0, maxLength) + dots
  }
  return title
}

