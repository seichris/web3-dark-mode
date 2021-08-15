<template>
  <div class="pt-3">
    <b-row no-gutters>
      <b-col class="col-md-6">
        <app-card class="mr-4">
          Blue Darkmode
        </app-card>
      </b-col>
      <b-col class="col-md-6">
        <app-card class="mr-4">
          DeFi Accessibility
        </app-card>
      </b-col>
      <b-col class="col-md-6">
        <app-card class="mr-4">
          Minimalist Design
        </app-card>
      </b-col>
      <b-col class="col-md-6">
        <app-card class="mr-4">
          Ultimate DeFi Dashboard
        </app-card>
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

import AppCard from './AppCard.vue';
import TheGoogleDriveSync from './sync/TheGoogleDriveSync.vue';
//import Web3ModalVue from "web3modal-vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
//import {web3Modal} from "./config/mixins";

import { importStylesWithFilePicker, exportAsJSONFile } from '../utils';

export default Vue.extend({
  name: 'TheBackupTab',

  components: {
    AppCard,
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
