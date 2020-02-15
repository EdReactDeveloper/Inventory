import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/Search/SearchBar'; 


const SearchFieldContainer = (props) => {
  const {decodedQuery} = useSelector(state => state.search)
  const [query, setQuery] = useState('')
  const {routing: {history}} = props

  
  useEffect(()=>{
    if(decodedQuery.length > 0){
      setQuery(decodedQuery)
    }
  }, [decodedQuery])

  const queryHandler = (e)=>{
    setQuery(e.target.value)
  }

  const searchSubmitHandler = (e) =>{
    e.preventDefault()
    if(query.length > 0){
      history.push(`/search?query=${query}`)
    }
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