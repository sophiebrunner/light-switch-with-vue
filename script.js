Vue.createApp({
  data() {
    return {
      lightsOn: true,
      documentTitle: "Good Night",
    };
  },
  methods: {
    switchLight() {
      this.lightsOn = !this.lightsOn;
      if (this.lightsOn === true) {
        this.documentTitle = "Good Night";
      } else {
        this.documentTitle = "Good Morning";
      }
    },
  },
}).mount("#app");
