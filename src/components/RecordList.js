import React from "react";
import Record from "./Record";

const RecordList = ({records}) => {
    
        const recordList = records.map((record, index) => {
          return <Record record={record} key={index} index={index}/>
        })
    
      return (
        <div>
        <ul>
          {recordList}
        </ul>
      </div>
      )
    }
    
    export default RecordList;