<template>
  <div :class="{'fullscreen-tab-panel': fullscreenTabPanel}">
    <div
      :class="{'fixed-top': fullscreenTabPanel, 'q-pa-sm': fullscreenTabPanel}"
      :style="{'z-index' : 200, 'background-color': '#fff'}"
    >
      <div class="text-subtitle1 text-bold text-grey q-mb-xs">
        <q-btn
          :icon="fullscreenTabPanel ? 'fullscreen_exit' : 'fullscreen'"
          size="xs"
          class="q-pa-xs q-mr-xs"
          @click="fullscreenTabPanel = !fullscreenTabPanel"
        />CASH DENOMINATION
      </div>

      <q-btn-toggle
        v-model="toggleModel"
        spread
        no-caps
        toggle-color="primary"
        color="white"
        text-color="black"
        size="sm"
        :options="[
          {label: 'BEFORE RELEASE', value: 'before'},
          {label: 'AFTER RELEASE', value: 'after'}
        ]"
      />
    </div>

    <!-- <q-list class="q-pa-none" "> -->
    <q-markup-table
      id="cash-denomination-table"
      separator="cell"
      flat
      bordered
      class="q-mt-xl"
      :style="{
        'margin-top': fullscreenTabPanel ? '65px' : '10px', 
        'margin-bottom': fullscreenTabPanel ? '' : '30px' 
      }"
    >
      <tbody>
        <tr>
          <th class="text-left" width="5%">BILLS</th>
          <th class="text-right">PIECES</th>
          <th class="text-right">AMOUNT</th>
        </tr>
        <template v-for="amount in amounts">
          <tr :key="amount">
            <td class="text-right">{{ amount | currency('') }}</td>
            <td class="text-right">
              <div class="cursor-pointer row">
                <div class="col-4">
                  <q-btn
                    size="xs"
                    class="q-pa-xs q-mr-md"
                    icon="fa fa-minus"
                    @click.stop="decrement(amount)"
                  />
                </div>
                <div
                  class="col-4 text-center text-blue text-bold"
                >{{ answers[amount] || 0 | currency('', 0) }}</div>
                <div class="col-4">
                  <q-btn
                    size="xs"
                    class="q-pa-xs q-ml-md"
                    icon="fa fa-plus"
                    @click.stop="increment(amount)"
                  />
                </div>
                <q-popup-edit v-model="answers[amount]" buttons>
                  <q-input
                    :label="amount | currency('')"
                    v-model="answers[amount]"
                    dense
                    autofocus
                    type="number"
                  />
                </q-popup-edit>
              </div>
            </td>
            <td class="text-right text-bold">{{ (answers[amount] * amount) || 0 | currency('') }}</td>
          </tr>
          <tr v-if="amount == 50" :key="'coins'+amount">
            <th class="text-left" colspan="3">COINS</th>
          </tr>
        </template>
        <tr class="total">
          <td>TOTAL</td>
          <td></td>
          <td class="text-right">{{ total | currency('') }}</td>
        </tr>
        <tr class="total">
          <td>NET</td>
          <td></td>
          <td class="text-right">{{ 5000 | currency('') }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: "clients",
  data() {
    const amounts = [1000, 500, 200, 100, 50, 10, 5, 1, 0.25, 0.1, 0.05];
    return {
      fullscreenTabPanel: false,
      toggleModel: "before",
      amounts,
      answers: {}
    };
  },

  computed: {
    total() {
      console.clear();
      console.log(Object.keys(this.answers));
      return Object.keys(this.answers).reduce((total, amount) => {
        console.log(total, amount, this.answers[amount]);
        return total + this.answers[amount] * amount;
      }, 0);
    }
  },

  methods: {
    initAmountPiece(amount) {
      if (!this.answers[amount]) {
        let amt = {};
        amt[amount] = 0;
        this.answers = { ...this.answers, ...amt };
      }
    },
    increment(amount) {
      console.log(amount);
      this.initAmountPiece(amount);
      this.answers[amount] += 1;
      console.log(this.answers[amount]);
    },
    decrement(amount) {
      this.initAmountPiece(amount);
      this.answers[amount] =
        this.answers[amount] - 1 > 0 ? this.answers[amount] - 1 : 0;
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

#cash-denomination-table th,
#cash-denomination-table .total {
  font-weight: 750;
}

#cash-denomination-table td {
  font-size: 16px;
}

.fullscreen-tab-panel {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 10px;
  z-index: 100;
  overflow: scroll;
}
</style>
