import React from 'react'
import loading from './loading.gif'

const Spinner =()=>{
    return (
      <div className='absolute top-20 left-1/2 max-md:top-2'><img src={loading} alt="loading..." /></div>
    )
}
export default Spinner