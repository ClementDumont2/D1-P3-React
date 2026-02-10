import React from 'react';
import './contractDetail.css';

const ContractDetail = ({ contract, witcher}) => {

    const statusClass = (contract.status ?? '').toString().trim().toLowerCase();

    return (
        <div className="detail-container">
            <div className="detail-header">
                <h1 className="detail-title">{contract.title}</h1>
            </div>

            <div className="detail-body">
                <section className="detail-section">
                    <h3>GOAL</h3>
                    <p className="detail-description">{contract.description}</p>
                </section>

                <div className="detail-reward-box">
                    <span className="reward-label">REWARD</span>
                    <span className="reward-amount">{contract.reward}</span>
                </div>

                <div className="detail-meta">
                    <div className="meta-item">
                        <span className="status-label">Status</span>
                        <span className={`status-badge ${statusClass}`}>
                            {contract.status}
                        </span>
                    </div>

                    {witcher && (
                        <div className="meta-item">
                            <span className="status-label">WITCHER</span>
                            <span className="witcher-name">⚔️{witcher.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractDetail;