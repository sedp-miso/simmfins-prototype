<template>
  <div>
    <q-select
      square
      filled
      dense
      v-model="selectedClient"
      :options="clients"
      :label="searchClientLabel"
    />
    <q-list class="q-pa-none">
      <!-- <span class="caption">GUMAMELA</span> -->
      <q-item-label header class="q-pa-none q-pt-xs">GUMAMELA</q-item-label>

      <!-- <q-separator></q-separator> -->
      <q-item class="q-px-none">
        <q-item-section avatar style="min-width: 42px">
          <q-avatar size="48px">
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juan Dela Cruz Santiago</q-item-label>
          <q-item-label class="text-subtitle1">{{ 1000 | currency('')}}</q-item-label>
          <q-item-label>
            <q-icon class="q-mr-xs" name="fas fa-first-aid" color="red" size="16px"></q-icon>
            <q-icon class="q-mr-xs" name="fas fa-wallet" color="blue" size="16px"></q-icon>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div>
            <q-popup-edit v-model="payment1" buttons>
              <q-input
                type="number"
                v-model="payment1"
                input-class="text-bold"
                @focus="$event.target.select()"
                label="Dela Cruz"
                dense
                autofocus
              />
            </q-popup-edit>
            <q-item-label
              class="text-h6 text-right text-primary badge-80"
              v-ripple
              v-touch-swipe.mouse.left.right.stop="handleSwipe"
            >
              <transition name="slide-fade" mode="out-in">
                <!-- Wrapping only one DOM element, defined by QBtn -->
                <span :key="payment1">{{ payment1 | currency('') }}</span>
              </transition>
            </q-item-label>
          </div>

          <q-item-label class="q-pt-none text-h6">
            <q-badge class="badge-80" color="blue">
              <select name="select">
                <option value="P" selected>PRESENT</option>
                <option value="U">UNDERTIME</option>
                <option value="T">TARDY</option>
                <option value="A">ABSENT</option>
                <option value="L">LEAVE</option>
                <option value="I">INACTIVE</option>
                <option value="E">EXCUSED</option>
              </select>
            </q-badge>
          </q-item-label>

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
            <q-badge class="badge-80 justify-center q-mt-xs" color="red">
              <span class="text-caption">{{ receipt || 'Set OR' }}</span>
              <q-icon name="receipt" color="white" class="q-ml-xs"></q-icon>
            </q-badge>
          </div>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>
    </q-list>
    <span class="q-ma-lg"></span>
  </div>
</template>

<script>
export default {
  name: "clients",
  data() {
    return {
      selectedClient: null,
      clients: [],
      payment1: 200.51,
      payment2: 0,
      receipt: null
    };
  },

  computed: {
    searchClientLabel() {
      return this.selectedClient ? null : "Search Client";
    }
  },

  methods: {
    handleSwipe({ evt, ...info }) {
      if (info.direction === "left") {
        this.payment1 = 0.0;
      }

      if (info.direction === "right") {
        this.payment1 = 1000;
      }
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
</style>
