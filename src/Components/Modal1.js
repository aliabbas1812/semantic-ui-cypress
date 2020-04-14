import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Upload from './Upload'


const Modal1 = () => (
    
  <Modal trigger={<Button className="button"style={{ color: "white", background: "black" }} >Show Full Profile</Button>}>
    <Modal.Header>Profile Details</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://www.winchcombe.co.uk/wp-content/uploads/2017/04/male-silhouette.png' />
      <Modal.Description>
        <Header>Profile details</Header>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        
      </Modal.Description>
    </Modal.Content>
    {/* <Upload></Upload> */}
  </Modal>
)

export default Modal1