import { useState, useEffect } from 'react'
import contractService from '../services/contractService'
import ContractCard from '../components/contractCard/contractCard';
import { Link, Links } from 'react-router-dom';

const ContractsPage = () => {
    const [contracts, setContracts] = useState([]);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');

    const handleChangeTitle = (event) => setTitle(event.target.value)
    const handleChangeStatus = (event) => setStatus(event.target.value)
    
    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const data = await contractService.getContracts(title, status);
                setContracts(data);

            } catch (error) {
                console.error("Erreur API:", error);
            }
        }
        fetchContracts();
    }, [title, status]);
    
    return (
        <div className="page-container">
            <form className="filter-form">
                <input 
                    type="text" 
                    placeholder='Contract title' 
                    onChange={handleChangeTitle} 
                    value={title}
                />
                <select onChange={handleChangeStatus} value={status}>
                    <option value="">All statuses</option>
                    <option value="Available">Available</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Completed">Completed</option>
                </select>
            </form>

            <h1>Contracts page</h1>
            
            <div className="contracts-grid">
                {contracts && contracts.length > 0 ? (
                    contracts.map((contract) => (
                        <Link
                            to={`/contracts/${contract.id}`}
                            key={contract.id}
                            className='contract-card-link'
                        >
                            <ContractCard
                                contract={contract}
                            />
                        </Link>
                    ))
                ) : (
                    <p className="no-data">No contract found for these filters.</p>
                )}
            </div>
        </div>
    )
}

export default ContractsPage;