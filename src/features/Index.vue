<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-md">
        <div class="row">
          <div class="col">
            <q-btn
              type="a"
              href="/collections/client_list"
              icon="fas fa-calculator"
              label="Clients List"
              stack
              glossy
              color="blue"
            />
          </div>

          <div class="col">
            <q-btn
              type="a"
              href="/collections/client_detail"
              icon="fas fa-user"
              label="Client Detail"
              stack
              glossy
              color="blue"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
