import { useState, useEffect } from 'react'
import contractService from '../services/contractService'
import witcherService from '../services/witcherService'
import ContractDetail from '../components/contractDetail/contractDetail';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useWitcher } from '../context/WitcherContext';
import WitcherName from '../components/witcherName';

const ContractDetailPage = () => {
    const {id} = useParams();
    const[contract, setContract] = useState([]);
    const [contractWitcher, setContractWitcher] = useState(null);
    const [witcher, setWitcher] = useState(null);
    const {witcherId} = useWitcher();
    const navigate = useNavigate();

    const handleAssignToUser = async () => {
        if (witcherId !== null) {
            const assignWitcher = await witcherService.addWitcherToContract(id, witcherId);
            navigate(`/contracts`);
        }
    }
    const handleEndContract = async () => {
        const endContract = await witcherService.endContract(id);
        navigate(`/contracts`);
    }
    
    useEffect(() => {
        const fetchContract = async (id) => {
            try {
                const data = await contractService.getContract(id);
                setContract(data);
                if (['Assigned', 'Completed'].includes(data.status)) {
                    const witcherData = await witcherService.getWitcher(data.assignedTo);
                    setContractWitcher(witcherData);
                }

            } catch (error) {
                console.error("Erreur API:", error);
            }
        }
        const fetchWitcher = async (id) => {
            try {
                const witcherData = await witcherService.getWitcher(id);
                setWitcher(witcherData);
            } catch (error) {
                
            }
        }
        if (witcherId !== null) {
            fetchWitcher(witcherId);
        }
        fetchContract(id);
    }, [witcherId]);

    return (
    <div>
        {witcher ? (
            <WitcherName witcher={witcher}/>) : (
            <p>Aucun utilisateur connecté</p>)
        }
        <Link
        to={`/contracts`}
        >
        <p>Return to menu</p>
        </Link>
        {contract && contract.length !== 0 ? (
            <div>
                <Link to={`/contracts/update/${contract.id}`}>
                    <p>Edit contract</p>
                </Link>
                <ContractDetail contract={contract} witcher={contractWitcher}>
                </ContractDetail>
                {contract.status === 'Available' ? (
                    <div>
                        <button onClick={handleAssignToUser}>Assign to logged user</button>
                    </div>
                    ) : (
                        <p></p>
                    )}
                {contract.status === 'Assigned' && contract.assignedTo === witcherId ? (
                    <div>
                        <button onClick={handleEndContract}>End contract</button>
                    </div>) 
                    : (
                        <p></p>
                    )
                }
            </div>
        ) : (
            <p>Can't show</p>
        )}
    </div>
    )
}

export default ContractDetailPage