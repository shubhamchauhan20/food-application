import React from 'react'
import './index.css'

export default function Shimmer() {
  return (
    <div className='restrount-list'>
      {Array(10).fill("").map((e, index) => (<div key={index} className='shimmer-card'></div>))}
      {console.log("shimmer")}
    </div>
  )
}
