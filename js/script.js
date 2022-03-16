const app = new Vue({

    el: '#container',

    data: {

        nuovoMessaggio: '',
        chatAttiva: 0,

        arrayContatti: [

            {
                nome: 'Michele',
                avatar: 'avatar_1.jpg',
                messaggio: 'ciao sei un grande!',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'Hai portato a spasso il cane?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'Ricordati di stendere i panni',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'Tutto fatto!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Fabio',
                avatar: 'avatar_2.jpg',
                messaggio: 'ci vediamo domani',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'ciao come stai?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'io bene, tu che dici?',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'sto scrivendo codice, mi fuma il cervello!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Samuele',
                avatar: 'avatar_3.jpg',
                messaggio: 'sbrigati a venire',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'forza roma',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'forza roma',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'sempre!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Alessandro B.',
                avatar: 'avatar_4.jpg',
                messaggio: 'mettiti a studiare',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'Hai studiato?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'lo hai fatto per bene?',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'Tutto fatto!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Alessandro L.',
                avatar: 'avatar_5.jpg',
                messaggio: 'scrivi codice',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'come va il corso?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'sei bravo?',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'sono un mostro!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Claudia',
                avatar: 'avatar_6.jpg',
                messaggio: 'ti voglio bene',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'usciamo insieme?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'mi piaci',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'anche tu!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Federico',
                avatar: 'avatar_7.jpg',
                messaggio: 'forza roma',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'domenica stadio?',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'offro io',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'daje!',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

            {
                nome: 'Davide',
                avatar: 'avatar_8.jpg',
                messaggio: 'sempre forza roma',
                ora: '13.12',
                arrayMessaggiChat: [
                    {
                        testo: 'dopo palestra',
                        ora: '15.30',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'Petto e bicipidi?',
                        ora: '15.50',
                        seiIlMittente: true,
                    },
                    {
                        testo: 'forza e coraggio',
                        ora: '16.15',
                        seiIlMittente: false,
                    },
                ],
            },

        ],

    },

    methods: {

        funzioneInviaMessaggio() {
            if (this.nuovoMessaggio.trim() != '') {
                this.arrayContatti[this.chatAttiva].arrayMessaggiChat.push({
                    testo: this.nuovoMessaggio,
                    ora: new Date().getHours() + '.' + new Date().getMinutes(),
                    seiIlMittente: true,
                });
                this.nuovoMessaggio = '';
            }
            setTimeout(this.funzioneRisposta, 1000);
        },

        funzioneRisposta() {
            let ora = new Date().getHours() + '.' + new Date().getMinutes();

            this.arrayContatti[this.chatAttiva].arrayMessaggiChat.push(
                {
                    testo: 'ok',
                    ora: new Date().getHours() + '.' + new Date().getMinutes(),
                    seiIlMittente: false,
                }
            )
        },

        funzioneChatAttiva(index) {
            this.chatAttiva = index;
        }

    },

});