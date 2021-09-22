import React from 'react';

const CampaignSingleItem = ({campaign}) => {
    const fields = campaign.fields;
    const date = new Date(fields.CreatedAt);

    const addLeadingZero = (number) => {
        if (number < 10) {
            return `0${number}`;
        }

        return number;
    }

    return (
        <tr key={campaign.id}>
            <td>{fields.Subject}</td>
            <td>{fields.Content}</td>
            <td>{`${date.getFullYear()}-${addLeadingZero(date.getMonth()+1)}-${addLeadingZero(date.getDay())}`}</td>
            <td>{fields.Status}</td>
        </tr>
    )
};

export default CampaignSingleItem;