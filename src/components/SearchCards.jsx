import React from 'react'
import { SearchCard } from './style/SearchCardStyle'

const SearchCards = ({Name,Img}) => {
  return (
    <SearchCard>
        <div className='search-img'>
        <img src={Img} alt={Name} />
      </div>
      <div className='search-title'>
        <h4>
            {Name}
        </h4>
      </div>
    </SearchCard>
  )
}

export default SearchCards
