<template>
  <div>
    <h1>Nangate45 (Archive)</h1>
    <br />
    <vs-tabs :color="colorx">
      <vs-tab label="aes">          <Metrics designName="aes"         libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="dynamicnode">  <Metrics designName="dynamicnode" libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="gcd">          <Metrics designName="gcd"         libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="ibex">         <Metrics designName="ibex"        libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="jpeg">         <Metrics designName="jpeg"        libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="swerv">        <Metrics designName="swerv"       libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
      <vs-tab label="tinyRocket">   <Metrics designName="tinyrocket"  libraryName="nangate45" :metrics=metrics></Metrics> </vs-tab>
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
