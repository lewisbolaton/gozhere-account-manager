Vue.component('view-field', {
  props: ['value'],
  data() { return {
      hovering: false
    };
  },
  methods: {
    edit() { this.$emit('editclick'); }
  },
  template: '<div class="view" @mouseover="hovering = true" @mouseleave="hovering = false"><span>{{ value }}</span><button v-if="hovering" @click="edit"><i class="material-icons">edit</i></button></div>'
});

Vue.component('edit-field-controls', {
  methods: { cancel() { this.$emit('cancelclick'); } },
  template: '<div><button class="confirm"><i class="material-icons">check</i></button><button class="cancel" @click="cancel"><i class="material-icons">highlight_off</i></button></div>'
});

Vue.component('edit-field', {
  props: ['value'],
  methods: {
    cancelClick() { this.$emit('cancelclick'); }
  },
  template: '<div class="edit"><input type="text" :value=value><edit-field-controls @cancelclick="cancelClick" /></div>'
});

Vue.component('profile-info', {
  props: ['val'],
  data() {
    return { fieldState: 'viewing' };
  },
  methods: {
    editField() { this.fieldState = 'editing'; },
    viewField() { this.fieldState = 'viewing'; }
  },
  template: '<div><view-field v-if="fieldState == `viewing`" :value="val" @editclick="editField" /><edit-field v-else-if="`editing` == fieldState" :value="val" @cancelclick="viewField" /></div>'
});

new Vue({
  el: '#profile-editor'
});
