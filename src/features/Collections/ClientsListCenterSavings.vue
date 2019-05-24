<template>
  <div>
    <div class="text-subtitle1 text-bold text-grey">CENTER SAVINGS</div>
    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Butaw</q-item-label>
          <q-item-label class="text-subtitle1">{{ 1000 | currency('')}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div>
            <q-popup-edit v-model="deposit" buttons>
              <q-input
                type="number"
                v-model="deposit"
                input-class="text-bold"
                @focus="$event.target.select()"
                label="Deposit"
                dense
                autofocus
              />
            </q-popup-edit>

            <q-item-label class="text-h6 text-green">
              {{ deposit | currency('') }}
              <q-icon class="q-mr-xs" name="fas fa-arrow-alt-circle-up" color="green" size="16px"></q-icon>
            </q-item-label>
          </div>

          <div>
            <q-popup-edit v-model="withdrawal" buttons>
              <q-input
                type="number"
                v-model="withdrawal"
                input-class="text-bold"
                @focus="$event.target.select()"
                label="Withdrawal"
                dense
                autofocus
              />
            </q-popup-edit>

            <q-item-label class="text-h6 text-red">
              {{ withdrawal | currency('') }}
              <q-icon class="q-mr-xs" name="fas fa-arrow-alt-circle-down" color="red" size="16px"></q-icon>
            </q-item-label>
          </div>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Butaw</q-item-label>
          <q-item-label class="text-subtitle1">{{ 1000 | currency('')}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div>
            <q-popup-edit v-model="deposit" buttons>
              <q-input
                type="number"
                v-model="deposit"
                input-class="text-bold"
                @focus="$event.target.select()"
                label="Deposit"
                dense
                autofocus
              />
            </q-popup-edit>

            <q-item-label class="text-h6 text-green">
              {{ deposit | currency('') }}
              <q-icon class="q-mr-xs" name="fas fa-arrow-alt-circle-up" color="green" size="16px"></q-icon>
            </q-item-label>
          </div>

          <div>
            <q-popup-edit v-model="withdrawal" buttons>
              <q-input
                type="number"
                v-model="withdrawal"
                input-class="text-bold"
                @focus="$event.target.select()"
                label="Withdrawal"
                dense
                autofocus
              />
            </q-popup-edit>

            <q-item-label class="text-h6 text-red">
              {{ withdrawal | currency('') }}
              <q-icon class="q-mr-xs" name="fas fa-arrow-alt-circle-down" color="red" size="16px"></q-icon>
            </q-item-label>
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
  data() {
    return {
      selectedClient: null,
      clients: [],
      deposit: 200.51,
      withdrawal: 1202.01
    };
  }
};
</script>

<style>
</style>
