import api from "./api";

const contractService = {
    getContracts: async (title, status) => {
        try {
            const params = {};
            if (title) params.title = title;
            if (status) params.status = status;

            const response = await api.get('/contracts', {
                params: params
            });
            return response.data;
        } catch (error) {
            console.error('Erreur dans la récupération des datas', error);
            throw error;
        }
    },
    getContract: async (id) => {
        try {
            const response = await api.get(`/contracts/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erreur dans la récupération des datas', error);
            throw error;
        }
    },
    createContract: async (title, description, reward) => {
        try {
            const response = await api.post(`/contracts`, {
                title,
                description,
                reward
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la création du contrat :', error);
            throw error;
        }
    },
    updateContract: async(id, title, description, reward) => {
        try {
            const response = await api.put(`/contracts/${id}`, {
                title,
                description,
                reward
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors du update du contrat :', error);
            throw error;
        }
    }
}

export default contractService