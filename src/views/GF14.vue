<template>
  <div>
    <h1>GF14</h1>
    <br />
    <vs-tabs :color="colorx">
      <vs-tab label="bp_single">
        <Metrics designName="bpsingle" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="gcd">
        <Metrics designName="gcd" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="aes">
        <Metrics designName="aes" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="bsg_loopback">
        <Metrics designName="bsgloopback" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="swerv">
        <Metrics designName="swerv" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="tinyRocket">
        <Metrics designName="tinyrocket" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="bp_fe_top">
        <Metrics designName="bpfetop" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="dnode">
        <Metrics designName="dnode" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
      <vs-tab label="ibex">
        <Metrics designName="ibex" libraryName="gf14" :metrics=metrics></Metrics>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
const axios = require("axios");

import Metrics from '../layouts/components/Metrics'

export default {
  created: function() {
    this.loadSchema();
  },
  components: {
    Metrics,
  },
  methods: {
    loadSchema() {
      axios
        .get(
          "https://raw.githubusercontent.com/abdelrahmanhosny/OpenROAD-flow/openroad/flow/util/metadata.schema.json"
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
    }
  },
  data: () => ({
    colorx: "dark",
    metrics: []
  })
};
</script>
