import React, {useEffect, useState}  from "react";

import { getFormValues } from "redux-form";
import { connect } from "react-redux";

//const SimpleTable = ({ values = { members: [] } }) => (
const SimpleTable = ({ values }) => {

  const [ue, setUe] = useState({firstName: 'hello'});
  //const uai = '';

  useEffect(() => {
    
    // arrayPush('wizard', 'id', 56);
    //   const result = values;
  const result = props => {
    console.log('result props: ', props);
    console.log('values: ', values);
  }
  result();

  setUe(values);
  console.log(ue);
  console.log('type:', typeof(ue));  

  }, [ue, values])

  return (


    <div>
      <h1 onClick={()=> alert((values.firstName))}>Click</h1>
      {/* <h1>{values.firstName}</h1> */}
      {/* <h1>{String(values.firstName)}</h1> */}
      {/* <ul>
        {ue.map(i => (
            <li> {i.firstName} </li>
        ))}
      </ul>   */}
    </div>
   
  );
}
export default connect(state => ({
  values: getFormValues('wizard')(state)
}))(SimpleTable);