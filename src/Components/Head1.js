import React from 'react'
import { Header } from 'semantic-ui-react'
import SearchUser from './SearchUser.js'

const Head1 = () => (
  <div>
    <Header className="h11"style={{ color: "white", background: "black" }} as='h1'>PROFILE</Header>
    <SearchUser></SearchUser>
    
  </div>
)

export default Head1
