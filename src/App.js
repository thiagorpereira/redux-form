import React from 'react';

import Form from '../src/form';
import SimpleTable from '../src/form/SimpleTable'

function App() {

  // const result = values;
  const result = values => {
   // console.log('result:', values);
  }

  return (

    <div>
          <Form onSubmit={result} />
          <SimpleTable/>
    </div>

  );
}

export default App;
// import React, { Component } from 'react';
// import '@coreui/icons/css/coreui-icons.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import './scss/style.css';

// import Form from '../src/form';

// class App extends Component {
//   result = (values) => {
//     console.log('result is', values);
//   }

//   render() {
//     return (
//       <Form onSubmit={this.result}/>
//     );
//   }
// }

// export default App;