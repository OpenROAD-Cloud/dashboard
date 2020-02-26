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
              <vs-th :key="build" v-for="(x, build) in builds">{{builds[build].timestamp}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                  <b>{{data[indextr].name}}</b>
                </vs-td>
                <vs-td
                  :key="indextrr"
                  v-for="(tr, indextrr) in builds"
                >{{builds[indextrr][data[indextr].name]}}</vs-td>
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
export default {
  data: () => ({
    colorx: "dark",
    builds: [
      { timestamp: "2020.02.20", commit: "db16fnj", uuid: "1234" },
      { timestamp: "2020.02.19", commit: "12ng7", uuid: "5678" },
      { timestamp: "2020.02.18", commit: "lsm7g", uuid: "1234" },
      { timestamp: "2020.02.17", commit: "amnv7as", uuid: "1234" }
    ],
    metrics: [
      { name: "commit" },
      { name: "uuid" },
      { name: "openroad_version" },
      { name: "yosys_version" },
      { name: "yosys_cell_count" }
    ]
  })
};
</script>

<style lang="css" scoped>
th {
  font-size: 1rem;
}
</style>