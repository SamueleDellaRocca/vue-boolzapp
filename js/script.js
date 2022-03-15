const app = new Vue({

    el: '#container',

    data: {

        nuovoMessaggio: '',

        arrayContatti: [

            {
                nome: 'Michele',
                avatar: 'avatar_1.jpg',
                messaggio: 'ciao sei un grande!',
                ora: '13.12',
            },

            {
                nome: 'Fabio',
                avatar: 'avatar_2.jpg',
                messaggio: 'ci vediamo domani',
                ora: '13.12',
            },

            {
                nome: 'Samuele',
                avatar: 'avatar_3.jpg',
                messaggio: 'sbrigati a venire',
                ora: '13.12',
            },

            {
                nome: 'Alessandro B.',
                avatar: 'avatar_4.jpg',
                messaggio: 'mettiti a studiare',
                ora: '13.12',
            },

            {
                nome: 'Alesandro L.',
                avatar: 'avatar_5.jpg',
                messaggio: 'scrivi codice',
                ora: '13.12',
            },

            {
                nome: 'Claudia',
                avatar: 'avatar_6.jpg',
                messaggio: 'ti voglio bene',
                ora: '13.12',
            },

            {
                nome: 'Federico',
                avatar: 'avatar_7.jpg',
                messaggio: 'forza roma',
                ora: '13.12',
            },

            {
                nome: 'Davide',
                avatar: 'avatar_8.jpg',
                messaggio: 'sempre forza roma',
                ora: '13.12',
            },

        ],

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

    methods: {

        funzioneInviaMessaggio() {
            if (this.nuovoMessaggio.trim() != '') {
                this.arrayMessaggiChat.push({
                    testo: this.nuovoMessaggio,
                    ora: new Date().getHours() + '.' + new Date().getMinutes(),
                    seiIlMittente: true,
                });
                this.nuovoMessaggio = '';
            }
        },

    },

});