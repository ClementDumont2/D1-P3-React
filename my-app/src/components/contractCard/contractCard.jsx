import React from 'react';
import './contractCard.css';

const ContractCard = ({ contract }) => {
    const statusClass = (contract?.status ?? '').toString().trim().toLowerCase();

    return (
        <div className="contract-card">
            <h2 className="contract-title">{contract.title}</h2>
            <p className="contract-description">{contract.description}</p>
            <div className="contract-footer">
                <span className="status-label">Status:</span>
                <span className={`status-badge ${statusClass}`}>
                    {contract.status}
                </span>
            </div>
        </div>
    );
};

export default ContractCard;