import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item';
import "./styles/subscriberList.scss";

const SubscriberList = (props) => {
    const [data, setData] = useState([]);
    const { className } = props;

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_TABLE_ID}/${process.env.REACT_APP_TABLE_NAME}?api_key=${process.env.REACT_APP_KEY}`)
            .then(request => request.json())
            .then(data => setData(data.records))
            .catch(error => console.log(error))
    }, [data]);

    return (
        <div className={`${className}`}>
            <div className={`${className}__label`}>
                <>Subscribers</>
            </div>
            <table className={`${className}--table`}>
                <tr className={`${className}--table__tr`}>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Created</th>
                </tr>
                {data.map(user =>
                    <Item user={user} className={className}  key={user.id}/>
                )}
            </table>
        </div>
    );

export default SubscriberList;