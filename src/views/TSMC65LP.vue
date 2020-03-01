<template>
  <div>
    <h1>TSMC65LP</h1>
    <br />
    <vs-tabs :color="colorx">
      <vs-tab label="gcd">
        <div class="con-tab-ejemplo">
          <vs-table search :data="metrics">
            <template slot="header">
              <h3>GCD</h3>
            </template>
            <template slot="thead">
              <vs-th>timestamp</vs-th>
              <vs-th :key="build" v-for="(x, build) in gcdBuilds">{{gcdBuilds[build].timestamp}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                  <b>{{data[indextr].name}}</b>
                </vs-td>
                <vs-td
                  :key="indextrr"
                  v-for="(tr, indextrr) in gcdBuilds"
                >{{gcdBuilds[indextrr][data[indextr].name]}}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="aes">
        <div class="con-tab-ejemplo">AES</div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default {
  data: () => ({
    colorx: "dark",
    gcdBuilds: [],
    metrics: [
      { name: "commit" },
      { name: "uuid" },
      { name: "openroad_version" },
      { name: "yosys_version" },
      { name: "yosys_cell_count" }
    ]
  }),
  created: function() {
    this.loadMetrics();
  },
  methods: {
    loadMetrics() {
      var db = firebase.firestore();
      var gcdMetrics = db.collection("metrics").doc("tsmc65lp-gcd");

      gcdMetrics
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.gcdBuilds = doc.data().builds;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
th {
  font-size: 1rem;
}
</style>