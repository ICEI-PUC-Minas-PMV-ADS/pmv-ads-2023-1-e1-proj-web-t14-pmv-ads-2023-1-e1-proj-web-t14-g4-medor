import db from './db.js';

class AgendamentoDataService {
    static list() {
        return db.agenda.toArray();
    }

    static async save(agenda) {
        await db.agenda.add(agenda);
    }

    static async delete(id) {
        await db.agenda.delete(id);
    }
}

export default AgendamentoDataService;
