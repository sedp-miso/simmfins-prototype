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
              <q-toolbar-title>Center Collection</q-toolbar-title>

              <q-btn flat round dense icon="fas fa-times" size="10px" @click="dialog = false"/>
            </q-toolbar>
            <q-card flat>
              <q-card-section>
                <q-item class="q-pa-none">
                  <q-item-section>
                    <q-item-label class="text-subtitle2">ABC - CENTER 101
                      <q-badge color="info">ALBAY</q-badge>
                    </q-item-label>
                    <q-item-label class="text-subtitle2">05/21/2019</q-item-label>
                    <q-item-label class="text-h6">
                      0.00
                      <span class="text-grey">●</span> 10,000.00
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-badge class="justify-center" color="positive" style="min-width: 80px;">
                      <span class="text-subtitle2">{{ 5000 | currency('') }}</span>
                    </q-badge>
                    <div class="cursor-pointer">
                      <q-popup-edit v-model="receipt" buttons>
                        <q-input
                          type="text"
                          v-model="receipt"
                          input-class="text-bold"
                          @focus="$event.target.select()"
                          label="Set OR"
                          dense
                          autofocus
                        />
                      </q-popup-edit>
                      <q-badge class="justify-center q-mt-xs" color="red" style="min-width: 80px;">
                        <span class="text-caption">{{ receipt || 'Set OR' }}</span>
                        <q-icon name="receipt" color="white" class="q-ml-xs"></q-icon>
                      </q-badge>
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator class="q-my-sm"/>
                <q-tab-panels keep-alive v-model="tabs.current" animated>
                  <q-tab-panel class="q-pa-none" name="clients">
                    <Clients/>
                  </q-tab-panel>
                  <q-tab-panel class="q-pa-none" name="center_savings">
                    <CenterSavings/>
                  </q-tab-panel>
                  <q-tab-panel class="q-pa-none" name="collection_releases">
                    <CollectionReleases/>
                  </q-tab-panel>
                  <q-tab-panel class="q-pa-none" name="emergency_loans">
                    <EmergencyLoans/>
                  </q-tab-panel>

                  <q-tab-panel class="q-pa-none" name="loans">
                    <EligibleLoanBorrowers/>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card-section>
            </q-card>
            <q-page-sticky expand position="bottom">
              <div class="row full-width">
                <div class="col">
                  <q-tabs v-model="tabs.current" dense switch-indicator class="text-blue-grey">
                    <q-tab
                      :class="{ 'text-primary': tabs.current === 'clients' }"
                      name="clients"
                      icon="fas fa-users"
                    >
                      <q-badge color="red" text-color="white" floating>1</q-badge>
                    </q-tab>

                    <q-tab
                      :class="{ 'text-primary': tabs.current === 'center_savings' }"
                      name="center_savings"
                      icon="fas fa-piggy-bank"
                    />

                    <q-tab
                      :class="{ 'text-primary': tabs.current === 'collection_releases' }"
                      name="collection_releases"
                      icon="fas fa-wallet"
                    >
                      <q-badge color="red" text-color="white" floating>2</q-badge>
                    </q-tab>

                    <q-tab
                      :class="{ 'text-primary': tabs.current === 'emergency_loans' }"
                      name="emergency_loans"
                      icon="fas fa-first-aid"
                    >
                      <q-badge color="red" text-color="white" floating>0</q-badge>
                    </q-tab>

                    <!-- <q-tab
                      :class="{ 'text-primary': tabs.current === 'denomination' }"
                      name="denomination"
                      icon="fas fa-money-bill"
                    >
                      <q-badge color="red" text-color="white" floating>0</q-badge>
                    </q-tab>-->
                    <q-tab
                      :class="{ 'text-primary': tabs.current === 'loans' }"
                      name="loans"
                      icon="fas fa-file-alt"
                    >
                      <q-badge color="red" text-color="white" floating>3</q-badge>
                    </q-tab>
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
import CollectionReleases from "./ClientsListCollectionReleases";
import EmergencyLoans from "./ClientsListEmergencyLoans";
import EligibleLoanBorrowers from "./ClientsListEligibleLoanBorrowers";

export default {
  components: {
    Clients,
    CenterSavings,
    CollectionReleases,
    EmergencyLoans,
    EligibleLoanBorrowers
  },

  data() {
    return {
      selectedClient: null,
      clients: [],
      tabs: new Tabs([
        "clients",
        "center_savings",
        "collection_releases",
        "emergency_loans",
        "loans"
      ]),
      receipt: null,
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
