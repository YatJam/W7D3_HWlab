import React, { useState, useEffect } from 'react';
import RecordList from '../components/RecordList';

const RecordContainer = () => {
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

    useEffect(() => {
        getRecords();
      }, [])

    const getRecords = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(records => setRecords(records.feed.entry))
    };

    return (
        <>  
            <RecordList records = {records}/>
        </>
    )

}

export default RecordContainer;