import Vue from "vue";

export const store = Vue.observable({
  isShowFormModal: false
});

export const mutations = {
  toggleModal() {
    store.isShowFormModal = !store.isShowFormModal;
  }
};
