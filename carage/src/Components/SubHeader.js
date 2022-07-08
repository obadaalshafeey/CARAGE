import React from 'react'

function SubHeader({subTitle1,subTitle2}) {
  return (
    <div className="section-header text-center">
        <p>{subTitle1}</p>
        <h2>{subTitle2}</h2>
      </div>
  )
}

export default SubHeader
