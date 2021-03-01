<template>
  <div class="con-tab-ejemplo">
    <vs-table search :data="metrics">
      <template slot="header">
        <h3>{{designName}}</h3>
      </template>
      <template slot="thead">
        <vs-th>timestamp</vs-th>
        <vs-th
          :key="i"
          v-for="(t, i) in timestamps"
        >{{t}}</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].name">
            <b>{{data[indextr].name.replace(/__/g, "::")}}</b>
          </vs-td>
          <vs-td
            :class="(builds[indextrr][data[indextr].name]  != undefined) ? builds[indextrr][data[indextr].name].color: ''"
            :key="indextrr"
            v-for="(tr, indextrr) in builds"
          >{{(builds[indextrr][data[indextr].name] != undefined) ? builds[indextrr][data[indextr].name].value:''}}</vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default {
  props: {
    designName: {
      type: String,
      required: true
    },
    libraryName: {
      type: String,
      required: true
    },
    metrics: {
      type: Array,
      required: true
    },
    firebaseDB: {
      type: String,
      required: true
    }
  },
  created: function() {
    this.loadMetrics();
  },
  methods: {
    loadMetrics() {
      var db = firebase.firestore();
      var doc = this.libraryName + "-" + this.designName;

      var designMetrics = db.collection(this.firebaseDB).doc(doc);

      designMetrics
        .get()
        .then(doc => {
          if (doc.exists) {
            this.builds = this.colorTableCells(doc.data().builds);
            this.builds.forEach(build => {
                if("run__flow__generate_date" in build) {
                    this.timestamps.push(build.run__flow__generate_date.value);
                } else {
                    this.timestamps.push("");
                }
            })
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

          if (
            build_value.toString().includes("ERR") ||
            build_value.toString().includes("N/A")
          ) {
            metric = {
              value: build_value,
              color: "metricUnimproved"
            };
            build[key] = metric;
            continue;
          }

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
    builds: [],
    timestamps: []
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
