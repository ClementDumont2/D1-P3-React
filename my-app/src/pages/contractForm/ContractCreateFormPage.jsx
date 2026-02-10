import contractService from "../../services/contractService";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./contractForm.css";

const ContractFormPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reward, setReward] = useState('');
    
    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeReward = (event) => setReward(event.target.value);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const requestSuccess = await contractService.createContract(title, description, reward);
            navigate('/contracts');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="form-page-wrapper">
            <Link to={'/records'}>Retour au menu</Link>
            <div className="contract-form-container">
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            className="form-input"
                            type="text" 
                            onChange={handleChangeTitle} 
                            placeholder="Title" 
                            value={title}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Description</label>
                        <textarea 
                            className="form-input"
                            onChange={handleChangeDescription} 
                            placeholder="Description"
                            value={description}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Reward</label>
                        <input 
                            className="form-input"
                            type="text" 
                            onChange={handleChangeReward} 
                            placeholder="Reward"
                            value={reward}
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn">Valider</button>
                </form>
            </div>
        </div>
    )
}

export default ContractFormPage;