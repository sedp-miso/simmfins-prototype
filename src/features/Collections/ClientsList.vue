<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-md">
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="true"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout class="bg-white" v-touch-swipe.mouse.left.right="handleSwipe">
            <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>Collection Payment</q-toolbar-title>

              <q-btn flat round dense icon="fas fa-times" size="10px" @click="dialog = false"/>
            </q-toolbar>
            <q-card flat>
              <q-card-section>
                <q-item class="q-pa-none">
                  <q-item-section>
                    <q-item-label class="text-subtitle2">ABC - CENTER 101
                      <q-badge class="q-mr-xs" color="positive">3</q-badge>
                      <q-badge color="info">ALBAY</q-badge>
                    </q-item-label>
                    <q-item-label class="text-subtitle2">05/21/2019</q-item-label>
                    <q-item-label class="text-h6">
                      0.00
                      <span class="text-grey">●</span> 10,000.00
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-badge color="positive">
                      <span class="text-subtitle2">{{ 5000 | currency('') }}</span>
                    </q-badge>
                  </q-item-section>
                </q-item>
                <q-separator class="q-my-sm"/>
                <q-tab-panels v-model="tabs.current" animated>
                  <q-tab-panel class="q-pa-none" name="clients">
                    <Clients/>
                  </q-tab-panel>
                  <q-tab-panel class="q-pa-none" name="center_savings">
                    <CenterSavings/>
                  </q-tab-panel>
                  <q-tab-panel class="q-pa-none" name="center_release">
                    <CenterReleases/>
                  </q-tab-panel>

                  <q-tab-panel class="q-pa-none" name="loans">
                    <div class="text-h6">Qualified</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </q-tab-panel>
                </q-tab-panels>
              </q-card-section>
            </q-card>
            <q-page-sticky expand position="bottom">
              <div class="row full-width">
                <div class="col">
                  <q-tabs
                    v-model="tabs.current"
                    dense
                    switch-indicator
                    class="bg-grey-2 text-primary"
                  >
                    <q-tab class="text-green" name="clients" icon="fas fa-users"/>

                    <q-tab class="text-orange" name="center_savings" icon="fas fa-piggy-bank"/>

                    <q-tab class="text-blue" name="center_release" icon="fas fa-wallet"/>

                    <q-tab class="text-info" name="loans" icon="fas fa-file-alt"/>
                  </q-tabs>
                </div>
              </div>
            </q-page-sticky>
          </q-layout>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Tabs from "../../services/Tabs";
import Clients from "./ClientsListClients";
import CenterSavings from "./ClientsListCenterSavings";
import CenterReleases from "./ClientsListCenterReleases";

export default {
  components: {
    Clients,
    CenterSavings,
    CenterReleases
  },

  data() {
    return {
      selectedClient: null,
      clients: [],
      tabs: new Tabs(
        ["clients", "center_savings", "center_release", "loans"],
        "center_release"
      ),
      dialog: true,
      payment1: 200.51,
      payment2: 0
    };
  },

  computed: {
    searchClientLabel() {
      return this.selectedClient ? null : "Search Client";
    }
  },

  methods: {
    handleSwipe({ evt, ...info }) {
      this.tabs.swipe(info.direction);
    }
  }
};
</script>

<style>
select {
  height: 20px;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  /* needed for Firefox: */
  overflow: hidden;
  width: 120%;
  text-align-last: center;
  color: white;
}

select option {
  color: black;
}
</style>
