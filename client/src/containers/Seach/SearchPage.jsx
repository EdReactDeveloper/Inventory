import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSearchAction} from '../../store/actions/search'; 

import SearchPage from '../../components/Search/Page'; 

const SearchPageContainer = (props) => {
  const dispatch = useDispatch()
  const {data, loading, decodedQuery} = useSelector(state => state.search)
  const {location:{search}} = props
  useEffect(()=>{
    if(search.length > 0){
      const query = search.replace('?query=', '')
      dispatch(getSearchAction(query))
    }
  }, [dispatch, search])

  const payload = {
    data: {
      data,
      decodedQuery
    },
    loaders: {
      loading
    }    
  }

  return <SearchPage {...payload} />
};

export default SearchPageContainer;