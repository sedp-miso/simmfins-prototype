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
                    <q-item-label
                      class="text-h6 cursor-pointer"
                      @click="collectionSummaryDialog = true"
                    >
                      11,000.00
                      <span class="text-grey">●</span>
                      10,000.00
                      <q-icon name="description" class="text-h6"></q-icon>
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-badge
                      class="justify-center"
                      color="positive"
                      style="min-width: 80px;"
                      @click="tabs.current = 'cash_denomination'"
                    >
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
                      <q-badge
                        class="justify-center q-mt-xs"
                        :color="receipt ? 'red' : 'grey'"
                        style="min-width: 80px;"
                      >
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
                  <q-tab-panel class="q-pa-none" name="cash_denomination">
                    <CashDenomination/>
                  </q-tab-panel>

                  <q-tab-panel class="q-pa-none" name="loans">
                    <EligibleLoanBorrowers/>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card-section>
            </q-card>

            <!-- Collection Summary -->
            <q-dialog
              v-model="collectionSummaryDialog"
              :maximized="true"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <div class="bg-white">
                <q-toolbar class="bg-primary text-white">
                  <q-toolbar-title>Center Collection Summary</q-toolbar-title>

                  <q-btn
                    flat
                    round
                    dense
                    icon="fas fa-times"
                    size="10px"
                    @click="collectionSummaryDialog = false"
                  />
                </q-toolbar>

                <q-list class="q-pa-none q-mt-md">
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">CASH</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label class="text-h6">11,000.00</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item>
                    <q-item-section>
                      <q-list dense class="q-px-md">
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">Loan Payments</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">8,100.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">Collection Payments</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">1,500.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">Deposits</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">1,400.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                      </q-list>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">WITHDRAWALS</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label class="text-h6">0.00</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">CENTER RELEASES</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label class="text-h6 text-red">(5,100.00)</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">EMERGENCY LOANS</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label class="text-h6 text-red">(1,000.00)</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">OTHER TRANSACTIONS</q-item-label>
                      <!-- <q-item-label class="text-body1">No cash involve</q-item-label> -->
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item>
                    <q-item-section>
                      <q-list dense class="q-px-md">
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">CBU Offset</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">50.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">SPS Offset</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">50.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section>
                            <q-item-label class="text-subtitle1 text-grey">Payment Thru MBA</q-item-label>
                          </q-item-section>
                          <q-item-section side>
                            <q-item-label class="text-body1 text-weight-medium">0.00</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                      </q-list>
                    </q-item-section>
                  </q-item>
                </q-list>

                <div class="row justify-end q-mt-md q-mx-md">
                  <div class="col text-subtitle1 text-bold">NET COLLECTION</div>
                  <div class="col text-right">
                    <q-badge class="text-h6 text-bold" color="success">{{ 5000.00 | currency('') }}</q-badge>
                  </div>
                </div>
              </div>
            </q-dialog>

            <q-page-sticky expand position="bottom">
              <div class="row full-width">
                <div class="col bg-white shadow-up-2">
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
import CashDenomination from "./ClientsListCashDenomination";
import Clients from "./ClientsListClients";
import CenterSavings from "./ClientsListCenterSavings";
import CollectionReleases from "./ClientsListCollectionReleases";
import EmergencyLoans from "./ClientsListEmergencyLoans";
import EligibleLoanBorrowers from "./ClientsListEligibleLoanBorrowers";

export default {
  components: {
    Clients,
    CashDenomination,
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
        "loans",
        "cash_denomination"
      ]),
      receipt: null,
      dialog: true,
      payment1: 200.51,
      payment2: 0,
      collectionSummaryDialog: true
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
