import React from "react";

const Record = ({record, index}) => {
    const recordPosition = (index +1)

    return <>
    <li>
    {recordPosition}).
    <source src={record.link.attributes} type="audio/mpeg"/>
     <img src={record['im:image'][0].label} alt="recordimage"/> 
     {record['title'].label}
    </li>
    <hr></hr>
    </>
  }
  
  export default Record;