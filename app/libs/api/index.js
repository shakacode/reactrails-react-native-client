const API_URL = 'http://www.reactrails.com/comments.json';

export default {

  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  fetchEntities() {
    return fetch(API_URL);
  },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  //  Todo: add CSRF api.
  submitEntity(entity) {
    return fetch({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': 'TODO',
      },
      data: entity,
    });
  },

};
