import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import SearchBar from '../../components/Search/SearchBar'; 
import {getSearchAction} from '../../store/actions/search'; 

const SearchFieldContainer = (props) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const queryHandler = (e)=>{
    setQuery(e.target.value)
  }

  const searchSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(getSearchAction(query))
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