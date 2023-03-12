import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      token: null,
      data: {},
    },
  }),
  getters: {},
  actions: {},
});
