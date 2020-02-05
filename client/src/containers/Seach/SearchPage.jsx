import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSearchAction} from '../../store/actions/search'; 

import SearchPage from '../../components/Search/Page'; 

const SearchPageContainer = (props) => {
  const dispatch = useDispatch()
  const {data, loading} = useSelector(state => state.search)
  const {location:{search}} = props
  useEffect(()=>{
    if(search.length > 0){
      const query = search.replace('?query=', '')
      dispatch(getSearchAction(query))
    }
  }, [dispatch])

  const payload = {
    data: {
      data
    },
    loaders: {
      loading
    }    
  }

  return <SearchPage {...payload} />
};

export default SearchPageContainer;