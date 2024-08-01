const { createApp } = Vue;
const App = {
  data() {
    return {
        message: 'Loading...',
        items: []
    };
  },
  mounted() {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts?_limit='+post_limit, {
        headers: {
        'Authorization': accessToken
        }
    }) .then(response => {
        this.items = response.data;
        this.message = 'Data Loaded';
    })
    .catch(error => {
        this.message = 'Error loading data';
        console.error(error);
    });
  }
};

const app = Vue.createApp(App);
app.mount("#app-post-list");