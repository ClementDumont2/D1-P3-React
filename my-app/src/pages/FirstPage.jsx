import { useState, useEffect } from 'react'
import contractService from '../services/contractService'
import ContractCard from '../components/contractCard/contractCard';

const FirstPage = () => {
    const [contracts, setContracts] = useState([]);
    
    useEffect(() => {
        const getContracts = async () => {
            try {
                const data = await contractService.getContracts();
                setContracts(data);
            } catch (error) {
                console.log(error)
            }
        }
        getContracts();
    }, []);
    
    return (
        <div className="page-container">
            <h1>Contracts page</h1>
            
            <div className="contracts-grid">
                {contracts && contracts.length > 0 ? (
                    contracts.map((contract) => (
                        <ContractCard
                            key={contract.id || contract.title}
                            contract={contract}
                        />
                    ))
                ) : (
                    <p>No contract found</p>
                )}
            </div>
        </div>
    )
}

export default FirstPage;