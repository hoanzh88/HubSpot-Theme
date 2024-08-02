const { createApp } = Vue;
const App = {
    data() {
        return {
            formData: {
            title: '',
            completed: false
            },
            message: {
            success: '',
            error: ''
            }
        };
    },
    methods: {
        submitForm() {
            this.message.success = '';
            this.message.error = '';
            const response = axios.post('https://jsonplaceholder.typicode.com/posts', this.formData, {
                headers: {
                'Authorization': accessToken
                }
            }) .then(response => {
                if(response.status == 201) {
                    this.message.success = 'Data inserted successfully';
                }else{
                    this.message.error = 'Data insertion failed';
                }
            })
            .catch(error => {
                this.message.error = 'Data insertion failed';
                console.error(error);
            });
        }
    }
};

const app = Vue.createApp(App);
app.mount("#app-post-add");