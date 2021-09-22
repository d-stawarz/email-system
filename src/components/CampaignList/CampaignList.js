import React, {useState, useEffect} from 'react';

import CampaignSingleItem from './CampaignSingleItem';

const CampaignList = () => {
    const [records, setRecords] = useState([]);

    const updateRecords = () => {
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}/${process.env.REACT_APP_CAMPAIGN_TABLE_NAME}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
            setRecords(res.records);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        updateRecords();

        //uncomment if you want to have refreshed data every 2 second
        // setInterval(() => {
        //     updateRecords();
        // }, 2000);
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Subject</th>
                <th>Content</th>
                <th>Created at</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {records.map(record => <CampaignSingleItem campaign={record}/>)}
            </tbody>
        </table>
    );
};

export default CampaignList;