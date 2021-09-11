import React, {useState, useEffect} from 'react';

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

        //uncomment if 
        // setInterval(() => {
        //     updateRecords();
        // }, 2000);
    }, []);

    const addLeadingZero = (number) => {
        if (number < 10) {
            return `0${number}`;
        }

        return number;
    }

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
                {records.map(record => {
                    const fields = record.fields;
                    const date = new Date(fields.CreatedAt);
                    return (
                        <tr key={record.id}>
                            <td>{fields.Subject}</td>
                            <td>{fields.Content}</td>
                            <td>{`${date.getFullYear()}-${addLeadingZero(date.getMonth()+1)}-${addLeadingZero(date.getDay())}`}</td>
                            <td>{fields.Status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default CampaignList;