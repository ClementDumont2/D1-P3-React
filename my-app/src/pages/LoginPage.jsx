import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import witcherService from "../services/witcherService";
import { useWitcher } from "../context/WitcherContext";

const LoginPage = () => {
    const [witchers, setWitchers] = useState([]);
    const [witcherId, setWitcherId] = useState(1);
    const {setGlobalWitcherId} = useWitcher();
    const handleChangeWitcher = (event) => setWitcherId(event.target.value);

    const navigate = useNavigate();
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setGlobalWitcherId(witcherId);
            navigate('/contracts');
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        const fetchWitchers = async () => {
            try {
                const data = await witcherService.getWitchers();
                setWitchers(data);

            } catch (error) {
                console.error("Erreur API:", error);
            }
        }
        fetchWitchers();
    }, [])
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <select name="" id="" onChange={handleChangeWitcher}>
                    {witchers && witchers.length > 0 ? (
                        witchers.map((witcher) => (
                            <option value={witcher.id} key={witcher.id}>{witcher.name}</option>
                        ))
                    ) : (
                        <option value=""></option>
                    )}
                </select>
                <button type="submit">Choose profile</button>
            </form>
        </div>
    )
}

export default LoginPage;