
// import React from 'react';
// import './Upload.css';
// import {useDropzone} from 'react-dropzone';

// function Upload (props){
//     const {acceptedFiles, getRootProps, getInputProps}=useDropzone();
//     const files=acceptedFiles.map(file=>(
//         <li key={file.path} bytes></li>
//     ));
//     return(
//         <section className="container">
//             <div {...getRootProps({className:`dropzone`})}>
//             <input{...getInputProps()}></input>
//             <p>Choose File</p>
//             </div>
//             <aside>
//                 <h4>Files</h4>
//                 <ul>{files}</ul>
//             </aside>
//         </section>
//     );
// }

// export default Upload