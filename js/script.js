const app = new Vue({

    el: '#container-main',

    data: {

        oraAttuale: new Date().getHours() + '.' + new Date().getMinutes(),
        nuovoMessaggio: '',
        chatAttiva: 0,
        ricerca: '',
        visibilita: false,
        anteprimaVisibile: true,


        arrayContatti: [

            {
                nome: 'Michele',
                avatar: 'avatar_1.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'Hai portato a spasso il cane?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'Ricordati di stendere i panni',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'Tutto fatto!',
                        ora: '16.15',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Fabio',
                avatar: 'avatar_2.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'ciao come stai?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'io bene, tu che dici?',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'sto scrivendo codice, mi fuma il cervello!',
                        ora: '17.15',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Samuele',
                avatar: 'avatar_3.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'forza roma',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'forza roma',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'sempre!',
                        ora: '16.30',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Alessandro B.',
                avatar: 'avatar_4.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'Hai studiato?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'lo hai fatto per bene?',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'Tutto fatto!',
                        ora: '21.25',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Alessandro L.',
                avatar: 'avatar_5.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'come va il corso?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'sei bravo?',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'sono un mostro!',
                        ora: '16.40',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Claudia',
                avatar: 'avatar_6.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'usciamo insieme?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'mi piaci',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'anche tu!',
                        ora: '18.15',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Federico',
                avatar: 'avatar_7.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'domenica stadio?',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'offro io',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'daje!',
                        ora: '19.20',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

            {
                nome: 'Davide',
                avatar: 'avatar_8.jpg',
                ora: '13.12',
                visibile: true,
                arrayMessaggiChat: [
                    {
                        testo: 'dopo palestra',
                        ora: '15.30',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'Petto e bicipidi?',
                        ora: '15.50',
                        seiIlMittente: true,
                        visibile: false,
                    },
                    {
                        testo: 'forza e coraggio',
                        ora: '20.12',
                        seiIlMittente: false,
                        visibile: false,
                    },
                ],
            },

        ],

    },

    methods: {

        funzioneInviaMessaggio() {
            if (this.arrayContatti.length !== 0) {

                if (this.nuovoMessaggio.trim() != '') {
                    this.arrayContatti[this.chatAttiva].arrayMessaggiChat.push({
                        testo: this.nuovoMessaggio,
                        ora: new Date().getHours() + '.' + new Date().getMinutes(),
                        seiIlMittente: true,
                        visibile: false,
                    });
                    this.nuovoMessaggio = '';
                }
                setTimeout(this.funzioneRisposta, 1000);

            } else {
                this.nuovoMessaggio = "Non puoi inviare messaggi, se l'elenco contatti è vuoto"
            }
        },

        funzioneRisposta() {
            let ora = new Date().getHours() + '.' + new Date().getMinutes();

            this.arrayContatti[this.chatAttiva].arrayMessaggiChat.push(
                {
                    testo: 'ok',
                    ora: new Date().getHours() + '.' + new Date().getMinutes(),
                    seiIlMittente: false,
                    visibile: false,
                }
            )
        },

        funzioneChatAttiva(index) {
            this.chatAttiva = index;
        },

        funzioneRicerca() {
            for (const index in this.arrayContatti) {
                if (this.arrayContatti[index].nome.toLowerCase().includes(this.ricerca.toLowerCase())) {
                    this.arrayContatti[index].visibile = true;
                } else {
                    this.arrayContatti[index].visibile = false;
                }
            };
        },

        funzioneCancellaMessaggio(index) {
            this.arrayContatti[this.chatAttiva].arrayMessaggiChat.splice(index, 1);
        },

        funzioneCancellaConversazione() {
            this.arrayContatti[this.chatAttiva].arrayMessaggiChat.splice(0, this.arrayContatti[this.chatAttiva].arrayMessaggiChat.length);
            if (this.arrayContatti[this.chatAttiva].arrayMessaggiChat.length == 0) {
                this.visibilita = false;
            }
        },

        funzioneEliminaContatto() {
            this.arrayContatti.splice(this.chatAttiva, 1)
            this.visibilita = false;
        },

        funzioneEliminaContatti() {
            this.arrayContatti.splice(this.chatAttiva)
            this.visibilita = false;
        },

        funzioneVisibile(index) {
            if (this.arrayContatti[this.chatAttiva].arrayMessaggiChat[index].visibile == false) {
                this.arrayContatti[this.chatAttiva].arrayMessaggiChat[index].visibile = true;
            } else {
                this.arrayContatti[this.chatAttiva].arrayMessaggiChat[index].visibile = false;
            }
        },

        funzioneRendiVisibile() {
            if (this.visibilita) {
                this.visibilita = false;
            } else {
                this.visibilita = true;
            }
        },

    },

    mounted: function () {
        setTimeout(() => {
            this.anteprimaVisibile = false;
        }, 3000);
    },


});