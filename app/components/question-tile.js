import Ember from 'ember';

export default Ember.Component.extend({
  // include favorites list
  favoritesList: Ember.inject.service(),

  actions: {
    // update a question
    update(question, params) {
      this.sendAction('update', question, params);
    },
    // add question to favorites list
    addToList(question) {
      this.get('favoritesList').add(question);
    }
  }
});
