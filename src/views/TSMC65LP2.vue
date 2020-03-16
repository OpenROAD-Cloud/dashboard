<template>
  <div>
    <h1>TSMC65LP</h1>
    <br />
    <vs-tabs :color="colorx">
      <vs-tab label="gcd">
        <div class="con-tab-ejemplo">
          <vs-table search :data="metrics">
            <template slot="header">
              <h3>gcd</h3>
            </template>
            <template slot="thead">
              <vs-th>timestamp</vs-th>
              <vs-th
                :key="build"
                v-for="(x, build) in gcdBuilds"
              >{{gcdBuilds[build].generate_date.value}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                  <b>{{data[indextr].name}}</b>
                </vs-td>
                <vs-td
                  :class="(gcdBuilds[indextrr][data[indextr].name]  != undefined) ? gcdBuilds[indextrr][data[indextr].name].color: ''"
                  :key="indextrr"
                  v-for="(tr, indextrr) in gcdBuilds"
                >{{(gcdBuilds[indextrr][data[indextr].name] != undefined) ? gcdBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="swerv">
        <div class="con-tab-ejemplo">
          <div class="con-tab-ejemplo">
            <vs-table search :data="metrics">
              <template slot="header">
                <h3>swerv</h3>
              </template>
              <template slot="thead">
                <vs-th>timestamp</vs-th>
                <vs-th
                  :key="build"
                  v-for="(x, build) in swervBuilds"
                >{{swervBuilds[build].generate_date.value}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <b>{{data[indextr].name}}</b>
                  </vs-td>
                  <vs-td
                    :class="(swervBuilds[indextrr][data[indextr].name]  != undefined) ? swervBuilds[indextrr][data[indextr].name].color: ''"
                    :key="indextrr"
                    v-for="(tr, indextrr) in swervBuilds"
                  >{{(swervBuilds[indextrr][data[indextr].name] != undefined) ? swervBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="tinyRocket">
        <div class="con-tab-ejemplo">
          <div class="con-tab-ejemplo">
            <vs-table search :data="metrics">
              <template slot="header">
                <h3>tinyRocket</h3>
              </template>
              <template slot="thead">
                <vs-th>timestamp</vs-th>
                <vs-th
                  :key="build"
                  v-for="(x, build) in tinyRocketBuilds"
                >{{tinyRocketBuilds[build].generate_date.value}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <b>{{data[indextr].name}}</b>
                  </vs-td>
                  <vs-td
                    :class="(tinyRocketBuilds[indextrr][data[indextr].name]  != undefined) ? tinyRocketBuilds[indextrr][data[indextr].name].color: ''"
                    :key="indextrr"
                    v-for="(tr, indextrr) in tinyRocketBuilds"
                  >{{(tinyRocketBuilds[indextrr][data[indextr].name] != undefined) ? tinyRocketBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="aes">
        <div class="con-tab-ejemplo">
          <div class="con-tab-ejemplo">
            <vs-table search :data="metrics">
              <template slot="header">
                <h3>aes</h3>
              </template>
              <template slot="thead">
                <vs-th>timestamp</vs-th>
                <vs-th
                  :key="build"
                  v-for="(x, build) in aesBuilds"
                >{{aesBuilds[build].generate_date.value}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <b>{{data[indextr].name}}</b>
                  </vs-td>
                  <vs-td
                    :class="(aesBuilds[indextrr][data[indextr].name]  != undefined) ? aesBuilds[indextrr][data[indextr].name].color: ''"
                    :key="indextrr"
                    v-for="(tr, indextrr) in aesBuilds"
                  >{{(aesBuilds[indextrr][data[indextr].name] != undefined) ? aesBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="bp_fe_top">
        <div class="con-tab-ejemplo">
          <div class="con-tab-ejemplo">
            <vs-table search :data="metrics">
              <template slot="header">
                <h3>bp_fe_top</h3>
              </template>
              <template slot="thead">
                <vs-th>timestamp</vs-th>
                <vs-th
                  :key="build"
                  v-for="(x, build) in bp_fe_topBuilds"
                >{{bp_fe_topBuilds[build].generate_date.value}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <b>{{data[indextr].name}}</b>
                  </vs-td>
                  <vs-td
                    :class="(bp_fe_topBuilds[indextrr][data[indextr].name]  != undefined) ? bp_fe_topBuilds[indextrr][data[indextr].name].color: ''"
                    :key="indextrr"
                    v-for="(tr, indextrr) in bp_fe_topBuilds"
                  >{{(bp_fe_topBuilds[indextrr][data[indextr].name] != undefined) ? bp_fe_topBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="dnode">
        <div class="con-tab-ejemplo">
          <vs-table search :data="metrics">
            <template slot="header">
              <h3>dnode</h3>
            </template>
            <template slot="thead">
              <vs-th>timestamp</vs-th>
              <vs-th
                :key="build"
                v-for="(x, build) in dnodeBuilds"
              >{{dnodeBuilds[build].generate_date.value}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                  <b>{{data[indextr].name}}</b>
                </vs-td>
                <vs-td
                  :class="(dnodeBuilds[indextrr][data[indextr].name]  != undefined) ? dnodeBuilds[indextrr][data[indextr].name].color: ''"
                  :key="indextrr"
                  v-for="(tr, indextrr) in dnodeBuilds"
                >{{(dnodeBuilds[indextrr][data[indextr].name] != undefined) ? dnodeBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="ibex">
        <div class="con-tab-ejemplo">
          <vs-table search :data="metrics">
            <template slot="header">
              <h3>ibex</h3>
            </template>
            <template slot="thead">
              <vs-th>timestamp</vs-th>
              <vs-th
                :key="build"
                v-for="(x, build) in ibexBuilds"
              >{{ibexBuilds[build].generate_date.value}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                  <b>{{data[indextr].name}}</b>
                </vs-td>
                <vs-td
                  :class="(ibexBuilds[indextrr][data[indextr].name]  != undefined) ? ibexBuilds[indextrr][data[indextr].name].color: ''"
                  :key="indextrr"
                  v-for="(tr, indextrr) in ibexBuilds"
                >{{(ibexBuilds[indextrr][data[indextr].name] != undefined) ? ibexBuilds[indextrr][data[indextr].name].value:''}}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
const axios = require("axios");
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default {
  created: function() {
    this.loadSchema();
    this.loadMetrics();
  },
  methods: {
    loadSchema() {
      axios
        .get(
          "https://raw.githubusercontent.com/The-OpenROAD-Project/OpenROAD-flow/openroad/flow/util/metadata.schema.json"
        )
        .then(response => {
          // handle success
          let metrics = [];
          for (var p in response.data.properties) {
            metrics.push({
              name: p,
              trend: response.data.properties[p]["improvement"]
            });
          }
          this.metrics = metrics;
        })
        .catch(function(error) {
          // handle error
          alert("Looks like the JSON schema changed on GitHub!");
          console.log(error);
        });
    },
    loadMetrics() {
      var db = firebase.firestore();
      var gcdMetrics = db.collection("metrics2").doc("tsmc65lp-gcd");

      gcdMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.gcdBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var swervMetrics = db.collection("metrics2").doc("tsmc65lp-swerv");

      swervMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.swervBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var tinyRocketMetrics = db
        .collection("metrics2")
        .doc("tsmc65lp-tinyrocket");

      tinyRocketMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.tinyRocketBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var aesMetrics = db.collection("metrics2").doc("tsmc65lp-aes");

      aesMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.aesBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var bpfetopMetrics = db.collection("metrics2").doc("tsmc65lp-bpfetop");

      bpfetopMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.be_fe_topBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var dnodeMetrics = db.collection("metrics2").doc("tsmc65lp-dnode");

      dnodeMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.dnodeBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });

      var ibexMetrics = db.collection("metrics2").doc("tsmc65lp-ibex");

      ibexMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.ibexBuilds = this.colorTableCells(doc.data().builds);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting metrics:", error);
        });
    },
    colorTableCells(builds) {
      var coloredBuilds = [];
      for (var i = builds.length - 1; i >= 0; i--) {
        var build = {};
        for (var key in builds[i]) {
          // check schema for that key
          var schema = this.metrics.filter(k => {
            return k.name == key;
          });
          const s = { ...schema[0] };
          var metric = {};

          var build_value = builds[i][key];
          try {
            var previous_build_value =
              builds[Math.min(i + 1, builds.length - 1)][key];
          } catch (error) {
            // that key did not exist in previous reports
            metric = {
              value: build_value,
              color: ""
            };
            build[key] = metric;
            continue;
          }

          if (s.trend == 1) {
            // check value of the previous build
            if (build_value > previous_build_value) {
              // following trend
              metric = {
                value: build_value,
                color: "metricImproved"
              };
              build[key] = metric;
            } else if (build_value < previous_build_value) {
              metric = {
                value: build_value,
                color: "metricUnimproved"
              };
              build[key] = metric;
            } else {
              metric = {
                value: build_value,
                color:
                  coloredBuilds.length > 0
                    ? coloredBuilds[coloredBuilds.length - 1][key] != undefined
                      ? coloredBuilds[coloredBuilds.length - 1][key]["color"]
                      : ""
                    : ""
              };
              build[key] = metric;
            }
          } else if (s.trend == -1) {
            if (build_value < previous_build_value) {
              // following trend
              metric = {
                value: build_value,
                color: "metricImproved"
              };
              build[key] = metric;
            } else if (build_value > previous_build_value) {
              metric = {
                value: build_value,
                color: "metricUnimproved"
              };
              build[key] = metric;
            } else {
              metric = {
                value: build_value,
                color:
                  coloredBuilds.length > 0
                    ? coloredBuilds[coloredBuilds.length - 1][key] != undefined
                      ? coloredBuilds[coloredBuilds.length - 1][key]["color"]
                      : ""
                    : ""
              };
              build[key] = metric;
            }
          } else {
            // no trend checker
            metric = {
              value: build_value,
              color: ""
            };
            build[key] = metric;
          }
        }
        coloredBuilds.push(build);
      }
      return coloredBuilds.reverse();
    }
  },
  data: () => ({
    colorx: "dark",
    gcdBuilds: [],
    swervBuilds: [],
    tinyRocketBuilds: [],
    aesBuilds: [],
    bp_fe_topBuilds: [],
    dnodeBuilds: [],
    ibexBuilds: [],
    metrics: []
  })
};
</script>

<style lang="css" scoped>
th {
  font-size: 1rem;
}
.metricImproved {
  background-color: lightgreen;
}
.metricUnimproved {
  background-color: red;
  color: white;
}
</style>