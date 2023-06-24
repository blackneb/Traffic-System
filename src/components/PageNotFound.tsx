import React from 'react'
import { Button, Result } from 'antd';


const PageNotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
    />
    </div>
  )
}

export default PageNotFound
