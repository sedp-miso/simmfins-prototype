<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-md">
        <div class="q-pa-md" style="max-width: 360px">
          <div class="q-pa-md q-gutter-sm">
            <q-btn label="Maximized" color="primary" @click="dialog = true"/>

            <q-dialog
              v-model="dialog"
              persistent
              :maximized="true"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <q-layout class="bg-white" v-touch-swipe.mouse.left.right="handleSwipe">
                <q-toolbar class="bg-primary text-white">
                  <q-toolbar-title>Client Collection</q-toolbar-title>

                  <q-btn flat round dense icon="fas fa-times" size="10px" @click="dialog = false"/>
                </q-toolbar>
                <q-card flat>
                  <q-card-section>
                    <q-item class="q-pa-none">
                      <q-item-section side>
                        <q-avatar size="48px">
                          <img src="https://cdn.quasar.dev/img/avatar6.jpg">
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-subtitle2">Marias Juana Dela Cruz</q-item-label>
                        <q-item-label class="text-h6">
                          0.00
                          <span class="text-grey">●</span> 10,000.00
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-badge color="blue">
                          <select name="select" style="height: 25px">
                            <option value="P" selected>PRESENT</option>
                            <option value="U">UNDERTIME</option>
                            <option value="T">TARDY</option>
                            <option value="A">ABSENT</option>
                            <option value="L">LEAVE</option>
                            <option value="I">INACTIVE</option>
                            <option value="E">EXCUSED</option>
                          </select>
                        </q-badge>
                      </q-item-section>
                    </q-item>
                    <q-separator class="q-mt-sm"/>
                    <q-tab-panels v-model="tabs.current" animated>
                      <q-tab-panel class="q-pa-none" name="loans">
                        <keep-alive>
                          <loans></loans>
                        </keep-alive>
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="collections">
                        <collections></collections>
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="savings">
                        <savings></savings>
                      </q-tab-panel>
                      <!-- <q-tab-panel class="q-pa-none" name="center_release">
                        <center-release></center-release>
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="emergency_loan">
                        <emergency-loans></emergency-loans>
                      </q-tab-panel>-->
                    </q-tab-panels>
                  </q-card-section>
                </q-card>
                <q-page-sticky expand position="bottom">
                  <div class="row full-width">
                    <div class="col">
                      <q-tabs v-model="tabs.current" dense switch-indicator class="text-blue-grey">
                        <q-tab
                          :class="{ 'text-primary': tabs.current === 'loans' }"
                          name="loans"
                          icon="fas fa-cash-register"
                        >
                          <q-badge color="red" floating>1</q-badge>
                        </q-tab>
                        <q-tab
                          :class="{ 'text-primary': tabs.current === 'collections' }"
                          name="collections"
                          icon="fas fa-coins"
                        />
                        <q-tab
                          :class="{ 'text-primary': tabs.current === 'savings' }"
                          name="savings"
                          icon="fas fa-piggy-bank"
                        />
                      </q-tabs>
                    </div>
                  </div>
                </q-page-sticky>
              </q-layout>
            </q-dialog>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Tabs from "../../services/Tabs";

import Loans from "./detail/Loans";
import Collections from "./detail/Collections";
import Savings from "./detail/Savings";

export default {
  components: { Loans, Collections, Savings },
  data() {
    return {
      dialog: true,
      maximizedToggle: false,
      tabs: new Tabs(["loans", "collections", "savings"], "loans")
    };
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.3, 0.6, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

.badge-80 {
  min-width: 80px;
}
</style>
