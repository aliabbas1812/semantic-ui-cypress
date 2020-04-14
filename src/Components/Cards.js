import React from 'react'
import { Card, Image} from 'semantic-ui-react';
import './Cards.css';
import Checkbox1 from './Checkbox1';

const Cards = () => (
  <div>
  <Card style={{ color: "pink", background: "lightblue" }}>
    <Image className="img1" src='https://www.winchcombe.co.uk/wp-content/uploads/2017/04/male-silhouette.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>ALI ABBAS</Card.Header>
      
      
    </Card.Content>
    
  </Card>
 
    <Checkbox1 ></Checkbox1>
  </div>
)

export default Cards