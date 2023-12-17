const { createApp } = Vue;
createApp({
    data() {
        return {
            arrowMails: []
        }
    },
    methods: {
        randomMails() {

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(

                    (response) => {
                        console.log(response);

                        this.arrowMails.push(response.data.response);
                    }
                );
            }
        }
    },

    created() {
        this.randomMails()
    }
}).mount('#app'); 
