import React from 'react'
import '../styles/getInfo.css'
const GetInfo = ({info}) => {
  return (
    <>
        <div className='getInfo'>
<div>
  <span>name: </span>{info.name}
</div>
<div>
  <span>surname: </span>{info.surname}
</div>
<div>
  <span>message: </span>{info.message}
</div>
     </div>
    </>
  )
}

export default GetInfo
