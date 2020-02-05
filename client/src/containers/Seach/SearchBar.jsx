import React, {useState} from 'react';
import SearchBar from '../../components/Search/SearchBar'; 


const SearchFieldContainer = (props) => {
  const [query, setQuery] = useState('')
  const {routing: {history}} = props

  const queryHandler = (e)=>{
    setQuery(e.target.value)
  }

  const searchSubmitHandler = (e) =>{
    e.preventDefault()
    history.push(`/search?query=${query}`)
  }

  const payload = {
    data: {
      query
    },
    methods: {
      queryHandler, 
      searchSubmitHandler
    }
  }

  return <SearchBar {...payload} />
};

export default SearchFieldContainer;