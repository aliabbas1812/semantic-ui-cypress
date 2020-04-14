import React from 'react'
import { Card, Icon,Progress } from 'semantic-ui-react'
import PostData from './Study.json'
// import ProgressBar from './ProgressBar'



const CardExampleHeaderCard = () => (
  
    PostData.map((postDetails,index)=>(<Card style={{ width:"380px" }} >
      
        <Card.Content>
          <Card.Header style={{ 'margin-right':"980px" }}>{postDetails.Id} </Card.Header> 
          <Card.Meta style={{ 'margin-left':"280px", color:'black' }}>{postDetails.title}</Card.Meta>
          <Card.Description style={{ 'text-align':'left','margin-top':'5px' }}>{postDetails.Description}</Card.Description>
          <Progress percent={postDetails.Progress}></Progress>
        </Card.Content>
        <Icon style={{ color: "red", 'margin-left':"5px" }} name="exclamation circle"></Icon>
        <Icon style={{ color: "blue", 'margin-left':"265px" }} name="tasks"></Icon>
        

        <Icon style={{ color: "grey", 'margin-left':"5px"}}name="comment"></Icon>

      </Card>))
    
)


export default CardExampleHeaderCard


