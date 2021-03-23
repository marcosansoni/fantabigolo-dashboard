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
        friend: 'Solo amici',
        open: 'Pubblico',
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
  details: {
    settings: {
      title: 'Impostazioni',
      general: 'Generali',
      game: 'Gioco',
      tab: {
        general: {
          errors: {
            participants: {
              default: 'Inserisci il numero dei partecipanti',
              required: 'Il numero dei partecipanti é obbligatorio',
              minimum: 'Ci deve essere almeno un partecipante',
            },
            initialBudget: {
              default: 'Inserisci il budget iniziale',
              required: 'Il budget é obbligatorio',
              minimum: 'Il budget deve essere un valore positivo',
            },
            goalkeeper: {
              default: 'Inserisci il numero dei portieri',
              required: 'Il numero dei portieri é obbligatorio',
              minimum: 'Ci deve essere almeno un portiere',
            },
            defender: {
              default: 'Inserisci il numero dei difensori',
              required: 'Il numero dei difensori é obbligatorio',
              minimum: 'Ci deve essere almeno un difensore',
            },
            midfielder: {
              default: 'Inserisci il numero dei centrocampisti',
              required: 'Il numero dei centrocampisti é obbligatorio',
              minimum: 'Ci deve essere almeno un centrocampista',
            },
            attackingMidfielder: {
              default: 'Inserisci il numero dei trequartisti',
              required: 'Il numero dei trequartisti é obbligatorio',
              minimum: 'Ci deve essere almeno un trequartista',
            },
            striker: {
              default: 'Inserisci il numero degli attaccanti',
              required: 'Il numero degli attaccanti é obbligatorio',
              minimum: 'Ci deve essere almeno un attaccante',
            },
          },
          status: {
            title: 'Stato',
            description: 'Definisce lo stato attuale della fantalega. La vita della fantalega può assumere infatti tre possibili stati.',
            recruitment: {
              title: 'Reclutamento',
              description: 'nella fase di definizione dei partecipanti',
            },
            auction: {
              title: 'Asta',
              description: 'nella fase in cui si definiscono le formazioni.',
            },
            championship: {
              title: 'Campionato',
              description: 'momento in cui la fantalega entra nel vivo.',
            },
            currentStatus: 'Stato attuale',
            button: 'Vai allo stato successivo',
            noPermissionButton: 'Solo gli admin possono modificare lo stato',
          },
          admin: {
            title: 'Admin',
            description: 'Per una fantalega sono consentiti non più di due admin',
            button: 'Aggiungi',
            noPermissionButton: 'Solo un admin puó aggiungerne un altro',
          },
        },
      },
    },
  },
};
