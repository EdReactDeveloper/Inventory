export const required = value => {
  if(value) return ''
  return 'Field is required'
}

export const validateLength = (minLength, maxLength) => (value)=>{
  if(value.length < minLength) return `min length is ${minLength} chars`
  if(value.length > maxLength) return `max length is ${maxLength}  chars`
  return '' 
}

export const isEmail = (value)=>{
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const result = regexp.test(value)
  if(result) return ''
  return 'should be a valid email'
}

