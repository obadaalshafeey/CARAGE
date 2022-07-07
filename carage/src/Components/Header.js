import React from 'react'

function Header({title}) {
  return (
    <>
    {/* Page Header Start */}
  <div className="page-header">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>{title}</h2>
      </div>
      <div className="col-12">
        <a href="">Home</a>
        <a href="">{title}</a>
      </div>
    </div>
  </div>
</div>
{/* Page Header End */}
</>
  )
}

export default Header