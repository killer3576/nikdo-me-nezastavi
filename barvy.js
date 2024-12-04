const app = Vue.createApp({
  data: function () {
    return {
      // variables
      //colorR, colorG, colorB
      colorR: 0,
      colorG: 0,
      colorB: 0,
    };
  },
  methods: {
    // functions
  },
  computed: {
    // "auto" functions/variables
    hexColorR: function () {
      if (this.colorR <= 15) {
        return "0" + this.colorR.toString(16).toUpperCase();
      } else return this.colorR.toString(16).toUpperCase();
    },
    getFillColorR: function () {
      return "#" + this.hexColorR + "0000";
    },

    hexColorG: function () {
      if (this.colorG <= 15) {
        return "0" + this.colorG.toString(16).toUpperCase();
      } else return this.colorG.toString(16).toUpperCase();
    },
    getFillColorG: function () {
      return "#00" + this.hexColorG + "00";
    },

    hexColorB: function () {
      if (this.colorB <= 15) {
        return "0" + this.colorB.toString(16).toUpperCase();
      } else return this.colorB.toString(16).toUpperCase();
    },
    getFillColorB: function () {
      return "#0000" + this.hexColorB;
    },

    getFillColorMix: function () {
      return "#" + this.hexColorR + this.hexColorG + this.hexColorB;
    },
  },
  mounted: function () {},
});

app.use(Quasar);
app.mount("#app");
