import React from 'react';
function  Members(props){
    return(
        <>
        <h1>Member Components</h1>
        <button onClick={props.data}>call data</button>
        </>
    )
}
export default Members;