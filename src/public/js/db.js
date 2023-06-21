import Dexie from 'dexie';

const db = new Dexie('MedOrganizer');

db.version(1).stores({
    medicamentos: '++id, nome',
    pacientes: '++id, nome, idade',
    medicos: '++id, nome',
    clinicasLaboratorios: '++id, nome',
    agenda: '++id, dataHora, tipo, status, medico_id, clinica_laboratorio_id, notas',
});

export default db;
