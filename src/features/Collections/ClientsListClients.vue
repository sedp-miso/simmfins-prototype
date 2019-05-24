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
      <q-item class="q-px-none">
        <q-item-section avatar style="min-width: 42px">
          <q-avatar size="48px">
            <img src="https://cdn.quasar-framework.org/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">
            <router-link
              to="/collections/client_detail"
              class="text-blue"
              style="text-decoration:none"
            >Maria Juan Dela Cruz</router-link>
          </q-item-label>
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
            <q-item-label class="text-h6">{{ payment1 }}</q-item-label>
          </div>

          <q-item-label class="q-pt-sm text-h6">
            <q-badge color="blue">
              <select name="select" @input.prevent>
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
        </q-item-section>
      </q-item>

      <q-separator inset></q-separator>

      <q-item class="q-px-xs">
        <q-item-section avatar style="min-width: 42px">
          <q-avatar size="48px">
            <img src="https://cdn.quasar-framework.org/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juan Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">{{ 1000 | currency('')}}</q-item-label>
          <q-item-label>
            <q-icon class="q-mr-xs" name="fas fa-first-aid" color="red" size="16px"></q-icon>
            <q-icon class="q-mr-xs" name="fas fa-wallet" color="blue" size="16px"></q-icon>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div>
            <q-popup-edit v-model="payment1" buttons>
              <q-input type="number" v-model="payment1" dense autofocus/>
            </q-popup-edit>
            <q-item-label class="text-h6">{{ payment1 }}</q-item-label>
          </div>

          <q-item-label class="text-h6">
            <q-badge color="blue">
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
        </q-item-section>
      </q-item>

      <q-separator inset></q-separator>

      <q-item class="q-px-xs">
        <q-item-section avatar style="min-width: 42px">
          <q-avatar size="48px">
            <img src="https://cdn.quasar-framework.org/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juan Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">{{ 1000 | currency('')}}</q-item-label>
          <q-item-label>
            <q-icon class="q-mr-xs" name="fas fa-first-aid" color="red" size="16px"></q-icon>
            <q-icon class="q-mr-xs" name="fas fa-wallet" color="blue" size="16px"></q-icon>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div>
            <q-popup-edit v-model="payment1" buttons>
              <q-input type="number" v-model="payment1" dense autofocus/>
            </q-popup-edit>
            <q-item-label class="text-h6">{{ payment1 }}</q-item-label>
          </div>

          <q-item-label class="text-h6">
            <q-badge color="blue">
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
        </q-item-section>
      </q-item>

      <q-separator inset></q-separator>
    </q-list>
    <span class="q-ma-lg"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClient: null,
      clients: [],
      payment1: 200.51,
      payment2: 0
    };
  },

  computed: {
    searchClientLabel() {
      return this.selectedClient ? null : "Search Client";
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
