import { useState, useEffect } from 'react'
import contractService from '../services/contractService'
import witcherService from '../services/witcherService'
import ContractDetail from '../components/contractDetail/contractDetail';
import { useParams, Link } from 'react-router-dom';

const ContractDetailPage = () => {
    const {id} = useParams();
    const[contract, setContract] = useState([]);
    const [witcher, setWitcher] = useState(null);

    useEffect(() => {
        const fetchContract = async (id) => {
            try {
                const data = await contractService.getContract(id);
                setContract(data);
                if (['Assigned', 'Completed'].includes(data.status)) {
                    const witcherData = await witcherService.getWitcher(data.assignedTo);
                    setWitcher(witcherData);
                }

            } catch (error) {
                console.error("Erreur API:", error);
            }
        }
        fetchContract(id);
    }, []);

    return (
    <div>
        <Link
        to={`/contracts`}
        >
        <p>Return to menu</p>
        </Link>
        {contract && contract.length !== 0 ? (
            <ContractDetail contract={contract} witcher={witcher}>
            </ContractDetail>
        ) : (
            <p>Can't show</p>
        )}
    </div>
    )
}

export default ContractDetailPage