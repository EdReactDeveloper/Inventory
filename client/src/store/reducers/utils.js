
// find item in array of ids
export const findItem = (array, id) =>{
  const index = array.findIndex(i=> i._id === id)
  return array[index]
}

// find item and remove it
export const findAndRemoveItem = (array, id) =>{
  const index = array.findIndex(i=> i._id === id)
  array.splice(index, 1)
  return array
}

