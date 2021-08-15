<template>
  <div class="pt-3">
    <b-alert v-model="showImportSuccessAlert" variant="success" dismissible>
      {{ t('import_success') }}
    </b-alert>

    <b-alert v-model="showImportErrorAlert" variant="danger" dismissible>
      {{ t('import_error', [importError]) }}
    </b-alert>

    <b-row no-gutters class="mt-5 mb-1">
      <h2>{{ t('sync_via_ceramic') }}</h2>
    </b-row>

    <app-button class="mr-4" variant="primary" @click="exportJson">
      {{ t('sync_web3') }}
    </app-button>

    <b-row no-gutters class="mt-5 mb-1">
      <h2>{{ t('sync_via_google_drive') }}</h2>
    </b-row>

    <the-google-drive-sync />

    <b-row no-gutters class="mt-5 mb-1">
      <h2>{{ t('backup') }}</h2>
    </b-row>

    <b-row no-gutters class="description mb-4">
      {{ t('backup_description') }}
    </b-row>

    <b-row no-gutters>
      <b-col>
        <app-button class="mr-4" variant="primary" @click="exportJson">
          {{ t('export') }}
        </app-button>

        <app-button @click="importJson">
          {{ t('import') }}
        </app-button>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <div id="app">
        <web3-modal-vue
            ref="web3modal"
            :theme="theme"
            :provider-options="providerOptions"
            cache-provider
        />
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppButton from './AppButton.vue';
import TheGoogleDriveSync from './sync/TheGoogleDriveSync.vue';
//import Web3ModalVue from "web3modal-vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
//import {web3Modal} from "./config/mixins";

import { importStylesWithFilePicker, exportAsJSONFile } from '../utils';

export default Vue.extend({
  name: 'TheBackupTab',

  components: {
    AppButton,
    TheGoogleDriveSync,
    /*Web3ModalVue*/
  },

  /*mixins: [web3Modal],*/

  data(): {
    showImportErrorAlert: boolean;
    showImportSuccessAlert: boolean;
    importError: string | DOMException | null;
  } {
    return {
      importError: null,
      showImportErrorAlert: false,
      showImportSuccessAlert: false,

      /*theme: 'light',
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "-"
          }
        }
      },
      number: 0,
      balance: 0,*/
    };
    /*created() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark'
    }
  },
  mounted() {
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      this.$store.commit('setWeb3Modal', web3modal)
      if (web3modal.cachedProvider) {
        await this.$store.dispatch('connect')
        this.subscribeMewBlockHeaders()
      }

    })
  },*/
  },

  methods: {
    exportJson(): void {
      exportAsJSONFile(this.$store.state.styles);
      /*connect() {
        this.$store.dispatch('connect')
      },*/
    },

    async importJson(): Promise<void> {
      try {
        const styles = await importStylesWithFilePicker();
        this.$store.dispatch('setAllStyles', styles);

        this.showImportErrorAlert = false;
        this.showImportSuccessAlert = true;
      } catch (e) {
        this.importError = e;
        this.showImportErrorAlert = true;
        this.showImportSuccessAlert = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.description {
  color: #555;
  font-size: 15px;
}
</style>
