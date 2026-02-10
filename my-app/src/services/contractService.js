import api from "./api";

const contractService = {
    getContracts: async () => {
        try {
            const response = await api.get('/contracts')
            return response.data;
        } catch (error) {
            console.log('Erreur dans la récupération des datas')
        }
    }
}

export default contractService