import React from 'react';
import "./styles/subscriberList.scss";

const SubscriberList = (props) => {
    const { className } = props;

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
                {[].map(user =>
                    <tr>
                        <td className={`${className}--table__td`}>{user.email}</td>
                        <td className={`${className}--table__td`}>{user.name}</td>
                        <td className={`${className}--table__td`}>{user.created}</td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default SubscriberList;