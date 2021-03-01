<template>
  <div>
    <h1>Sky130hs (Archive)</h1>
    <br />
    <vs-tabs :color="colorx">
      <vs-tab label="aes">          <Metrics designName="aes"         libraryName="sky130hs" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="gcd">          <Metrics designName="gcd"         libraryName="sky130hs" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="ibex">         <Metrics designName="ibex"        libraryName="sky130hs" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="jpeg">         <Metrics designName="jpeg"        libraryName="sky130hs" :metrics=metrics></Metrics> </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>

import Metrics from '../../layouts/components/Metrics'
import metadataSchema from "../schemas/metadata.schema-v1.json";

export default {
  created: function() {
    this.loadSchema();
  },
  components: {
    Metrics,
  },
  methods: {
    loadSchema() {
      let metrics = [];
      for (var p in metadataSchema.properties) {
        metrics.push({
          name: p,
          trend: metadataSchema.properties[p]["improvement"]
        });
      }
      this.metrics = metrics;
    }
  },
  data: () => ({
    colorx: "dark",
    metrics: []
  })
};
</script>
