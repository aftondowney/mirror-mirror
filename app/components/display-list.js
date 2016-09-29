import Ember from 'ember';

export default Ember.Component.extend({
  // Favorites List as a service
  favoritesList: Ember.inject.service(),
});
