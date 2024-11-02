const app = Vue.createApp({
  data: function() {
    return {
      text: "Hello from Quasar app!",
      year: 2024,
      inSchool: true,
    };
  },
  methods: {

  },
  computed: {},
  mounted: function() {

  },
});

app.use(Quasar);
app.mount('#app');