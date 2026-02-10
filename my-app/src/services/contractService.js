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
    }
}

export default contractService