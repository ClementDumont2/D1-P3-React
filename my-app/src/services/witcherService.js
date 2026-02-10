import api from "./api";

const witcherService = {
    getWitchers: async () => {
        try {
            const response = await api.get(`/witchers`);
            return response.data;
        } catch (error) {
            console.error('Erreur dans la récupération des datas', error);
            throw error;
        }
    },
    getWitcher: async (id) => {
        try {
            const response = await api.get(`/witchers/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erreur dans la récupération des datas', error);
            throw error;
        }
    },
    addWitcherToContract: async (contractId, witcherId) => {
        witcherId = witcherId.toString();
        try {
            console.log('Contract id : ', contractId, ' Witcher id ', witcherId)
            const response = await api.put(`contracts/${contractId}/assignedTo`, witcherId);
            return response.data;
        } catch (error) {
            console.error('Erreur lors du update du contrat :', error);
            throw error;
        }
    },
    endContract: async (contractId) => {
        try {
            const response = await api.put(`contracts/${contractId}/status`, "Completed");
            return response.data;
        } catch (error) {
            console.error('Erreur lors du update du contrat :', error);
            throw error;
        }
    }
}

export default witcherService