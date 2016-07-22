// SAME URL for both post and get
const API_URL = 'http://www.reactrails.com/comments.json';

// const API_URL = 'http://localhost:3000/comments.json';

export default {
  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  fetchEntities() {
    return fetch(API_URL, { timeout: 3 });
  },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  submitEntity(entity) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('X-Auth', 'tutorial_secret');

    return fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(entity),
    });
  },
};
