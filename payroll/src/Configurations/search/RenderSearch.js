import React from 'react'
import SearchableComp from './SearchableComp'
import SearchInputConfig from './SearchInputConfig.json'

const RenderSearch = () => {
  return (
    <div>

<SearchableComp SearchConfig={SearchInputConfig}/>
    </div>
  )
}

export default RenderSearch