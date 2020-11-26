import axios from "axios";

const baseUrl = "http://localhost:3003/"

export default {
    questions(url = baseUrl + 'questions/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newQuest => axios.post(url, newQuest),
            update: (id, newQuest) => axios.put(url + id, newQuest),
            delete: id => axios.delete(url + id)
        }
    }
}
