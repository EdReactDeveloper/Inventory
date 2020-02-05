import React from 'react';
import {useSelector} from 'react-redux';
import SearchPage from '../../components/Search/Page'; 

const SearchPageContainer = (props) => {
  const {data, loading} = useSelector(state => state.search)

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