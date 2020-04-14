import React from 'react'
import { Card , Icon} from 'semantic-ui-react'
import Post from './task.json'
import Donut from './Donut'
// import { render } from 'react-dom';



const renderProgress = progress => <strong>{progress}/5</strong>;
const CardExampleHeaderCard = () => (
  
    Post.map((details,index)=>(<Card style={{ width:"510px", height:"206px" }}> 
        <Card.Content>
    <Card.Header style={{ 'text-align':"left" }}>{details.title}  &emsp; &emsp; {details.Id}</Card.Header>
          
          <Card.Meta style={{ 'text-align':"left" }}>{details.Description}</Card.Meta>
          <Card.Description content={details.info} />
         

          <Donut progress={details.Progress} onRender={renderProgress} />
          
          <Icon style={{ color: "yellow", 'margin-right':"400px",}} name="exclamation circle"></Icon>
          <Card.Meta style={{color:'black','margin-top':"-70px" }}>Complete by:{details.Date}</Card.Meta>
        </Card.Content>
      </Card>))
    
)

export default CardExampleHeaderCard



