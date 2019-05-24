<template>
  <div>
    <div class="col q-mt-md text-subtitle1 text-bold text-grey">SAVINGS</div>

    <div class="row q-mt-md">
      <q-list class="col payment-types">
        <q-item class="q-px-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">CBU</q-item-label>
            <q-item-label class="text-subtitle1">2,000.00</q-item-label>
          </q-item-section>

          <q-item-section side>
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
            <q-item-label class="text-subtitle1 text-bold">SPS</q-item-label>
            <q-item-label class="text-subtitle1">500.00</q-item-label>
          </q-item-section>

          <q-item-section side>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Savings",
  data() {
    return {
      withdrawal: 2000.0,
      deposit: 500.0
    };
  },
  computed: {}
};
</script>

<style>
</style>
