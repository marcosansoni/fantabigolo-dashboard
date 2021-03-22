export default {
  list: {
    title: 'Le tue fantaleghe',
    tabs: {
      recent: 'Recenti',
    },
    add: 'Aggiungi',
    empty: {
      title: 'Nessuna fantalega trovata',
      button: 'Aggiungi',
    },
  },
  new: {
    title: 'Crea la tua fantalega',
    description: 'In questa fase sara possibile creare una nuova fantalega. Diventerai automaticamente l’admin della fantalega appena creata.',
    placeholder: {
      fantateam: 'Fantateam',
      fantaleague: 'Fantalega',
      visibility: 'Visibilitá',
      competition: 'Tipo di competizione',
      participants: 'Partecipanti',
    },
    helperText: {
      fantateam: 'Il nome del tuo team all\'interno della fantalega',
      fantaleague: 'Il nome utilizzato e visualizzato della fantalega',
      visibility: 'Le possibili visibilità del campionato',
      competition: 'Le possibili modalità di competizione',
      participants: 'Il numero di partecipanti della fantalega',
    },
    errors: {
      fantateam: {
        default: 'Inserisci il nome del tuo fantateam',
        required: 'Il nome del fantateam é obbligatorio',
        minimum: 'Il nome del fantateam deve avere almeno 4 caratteri',
      },
      fantaleague: {
        default: 'Inserisci il nome della fantalega',
        required: 'Il nome della fantalega é obbligatorio',
        minimum: 'Il nome del fantalega deve avere almeno 4 caratteri',
      },
      participants: {
        default: 'Inserisci il numero dei partecipanti',
        required: 'Il numero dei partecipanti é obbligatorio',
        minimum: 'Ci deve essere almeno un partecipante',
      },
    },
    options: {
      visibility: {
        close: 'Chiuso',
        options1: 'options1',
        options2: 'options2',
      },
      competition: {
        classic: 'Classico',
        simplified: 'Semplificato',
        f1: 'F1',
        knockout: 'Eliminazione',
        champions: 'Champions League',
      },
    },
    primary: 'Crea',
    cancel: 'Annulla',
  },
};
