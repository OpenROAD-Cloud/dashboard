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
              <vs-th :key="build" v-for="(x, build) in gcdBuilds">{{gcdBuilds[build].generate_date}}</vs-th>
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
  created: function() {
    this.loadMetrics();
  },
  methods: {
    loadMetrics() {
      var db = firebase.firestore();
      var gcdMetrics = db.collection("metrics").doc("tsmc65lp-gcd");

      gcdMetrics
        .get()
        .then(doc => {
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
  },
  data: () => ({
    colorx: "dark",
    gcdBuilds: [],
    metrics: [
      { name: "comment" },
      { name: "cts_cpu" },
      { name: "cts_mem" },
      { name: "cts_time" },
      { name: "design" },
      { name: "dp_average_displacement" },
      { name: "dp_core_area" },
      { name: "dp_cpu" },
      { name: "dp_delta_HPWL" },
      { name: "dp_design_utilization" },
      { name: "dp_legalized_HPWL" },
      { name: "dp_max_displacement" },
      { name: "dp_mem" },
      { name: "dp_original_HPWL" },
      { name: "dp_time" },
      { name: "dp_total_cells" },
      { name: "dp_total_displacement" },
      { name: "droute_cpu" },
      { name: "droute_defvias" },
      { name: "droute_errors" },
      { name: "droute_mem" },
      { name: "droute_num_components" },
      { name: "droute_num_instances" },
      { name: "droute_num_layers" },
      { name: "droute_num_macros" },
      { name: "droute_num_nets" },
      { name: "droute_num_terminals" },
      { name: "droute_num_unique_instances" },
      { name: "droute_num_vias" },
      { name: "droute_peak_mem" },
      { name: "droute_runtime" },
      { name: "droute_time" },
      { name: "droute_total_num_vias" },
      { name: "droute_trackPts" },
      { name: "droute_viols" },
      { name: "droute_warnings" },
      { name: "droute_wirelength" },
      { name: "fastroute_cpu" },
      { name: "fastroute_mem" },
      { name: "fastroute_time" },
      { name: "finish_area" },
      { name: "finish_internal_power" },
      { name: "finish_leakage_power" },
      { name: "finish_switching_power" },
      { name: "finish_total_power" },
      { name: "finish_util" },
      { name: "floorplan_area" },
      { name: "floorplan_cpu" },
      { name: "floorplan_io_count" },
      { name: "floorplan_io_cpu" },
      { name: "floorplan_io_mem" },
      { name: "floorplan_io_time" },
      { name: "floorplan_mem" },
      { name: "floorplan_tdms_cpu" },
      { name: "floorplan_tdms_mem" },
      { name: "floorplan_tdms_time" },
      { name: "floorplan_time" },
      { name: "floorplan_tns" },
      { name: "floorplan_util" },
      { name: "floorplan_warnings" },
      { name: "floorplan_wns" },
      { name: "generate_date" },
      { name: "globalplace_cpu" },
      { name: "globalplace_hpwl" },
      { name: "globalplace_mem" },
      { name: "globalplace_time" },
      { name: "globalplace_tns" },
      { name: "globalplace_util" },
      { name: "globalplace_ws" },
      { name: "klayout_viols" },
      { name: "merge_cpu" },
      { name: "merge_mem" },
      { name: "merge_time" },
      { name: "mplace_cpu" },
      { name: "mplace_macro_count" },
      { name: "mplace_mem" },
      { name: "mplace_solutions" },
      { name: "mplace_time" },
      { name: "openroad_commit" },
      { name: "openroad_version" },
      { name: "pdn_cpu" },
      { name: "pdn_mem" },
      { name: "pdn_time" },
      { name: "platform" },
      { name: "report_cpu" },
      { name: "report_mem" },
      { name: "report_time" },
      { name: "resizer_cpu" },
      { name: "resizer_hbuf_count" },
      { name: "resizer_ibuf_count" },
      { name: "resizer_maxcap_viols" },
      { name: "resizer_maxfanout_bufs" },
      { name: "resizer_maxfanout_viols" },
      { name: "resizer_maxslew_viols" },
      { name: "resizer_mem" },
      { name: "resizer_obuf_count" },
      { name: "resizer_post_area" },
      { name: "resizer_post_tns" },
      { name: "resizer_post_util" },
      { name: "resizer_post_wns" },
      { name: "resizer_pre_area" },
      { name: "resizer_pre_tns" },
      { name: "resizer_pre_util" },
      { name: "resizer_pre_wns" },
      { name: "resizer_resize_count" },
      { name: "resizer_time" },
      { name: "synth_cpu" },
      { name: "synth_mem" },
      { name: "synth_time" },
      { name: "tapcell_cpu" },
      { name: "tapcell_mem" },
      { name: "tapcell_time" },
      { name: "total_time" },
      { name: "uuid" },
      { name: "yosys_cell_count" },
      { name: "yosys_chip_area" },
      { name: "yosys_mem" },
      { name: "yosys_runtime" },
      { name: "yosys_version" },
      { name: "yosys_warnings" }
    ]
  })
};
</script>

<style lang="css" scoped>
th {
  font-size: 1rem;
}
</style>