

export const findItem = (array, id) =>{
  const index = array.findIndex(i=> i._id === id)
  return array[index]
}

export const findAndRemoveItem = (array, id) =>{
  const index = array.findIndex(i=> i._id === id)
  array.splice(index, 1)
  return array
}

