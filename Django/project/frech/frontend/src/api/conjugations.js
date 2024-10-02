import axios from "axios";

const API_URL = "http://localhost:8000";

export const conjugateVerb = async (verb, tense) => {
    try {
        const response = await axios.post(`${API_URL}/conjugate/`, {verb, tense});
        return response.data;
    } catch (error) {
        console.error("Error conjugating verb:", error);
        throw error;
    }
}