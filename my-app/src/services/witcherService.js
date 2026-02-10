import api from "./api";

const witcherService = {
    getWitcher: async (id) => {
        try {
            const response = await api.get(`/witchers/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erreur dans la récupération des datas', error);
            throw error;
        }
    }
}

export default witcherService