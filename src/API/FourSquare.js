/**
 * Foursquare class built on the top of Foursquare API
 * to handle API request & response for the venues' data.
 *
 * Uses => 'axios' library instead of 'fetch' to cater the
 * REST request & response.
 *
 * Returns => JSON parsed Response
 */

import axios from "axios";

/**
 * Credentials for the FOURSQUARE API
 */
const FOURSQUARE_ID = "VYQN5SKLH1VR2RUFIHYKWPNFZFDP0DO4FZDYKWIW4SYKZPVD";
const FOURSQUARE_SECRET = "HLGAVNOAKSQKJMVTD0PXHY43BA0Y2BVI0PUWH1A4IBTKTH5V";
const FOURSQUARE_VERSION = "20180323";

/**
 * Helper class for the
 *
 * Contains => methods to built & format request URLs and response data
 */
class Helper {
  /**
   * Returns => base URL for the FourSquare API
   */
  static getBaseURL() {
    return "https://api.foursquare.com/v2";
  }

  /**
   * Builds and returns the parameters to be used for the FourSquare API requests.
   * Concatenates the request parameters with the credentials
   *
   * @param {Object} params : Request URL parameters
   */
  static getParams(params) {
    const credentials = {
      v: FOURSQUARE_VERSION,
      client_id: FOURSQUARE_ID,
      client_secret: FOURSQUARE_SECRET
    };
    if (!params) {
      return credentials;
    } else {
      return Object.assign(credentials, params);
    }
  }

  /**
   * Builds and returns the URL endpoint for the API request
   *
   * @param {string} urlEndpoint : Endpoint of API request URL
   */
  static getRequestUrl(urlEndpoint) {
    return this.getBaseURL() + urlEndpoint + "?";
  }

  /**
   * Fetches the response from the Foursquare
   *
   * @param {string} endpoint  : Endpoint of API request URL
   * @param {object} params  : Request URL parameters
   */

  static async getResponse(endpoint, params) {
    return await axios
      .get(
        this.getRequestUrl(endpoint) +
        new URLSearchParams(this.getParams(params))
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        alert(`Error: Couldn't get the data from the Foursquare.
          See the developement console for the error details.`);
        return error;
      });
  }
}

/**
 * Main class to be exported
 *
 * Contains => Methods for different FourSquare API requests
 */
export default class FourSquareAPI {
  /**
   * Returns recommended venues from the FourSquare
   *
   * @param {object} params : Request parameters
   */
  static getRecommendedVenues(params) {
    return Helper.getResponse(`/venues/explore`, params);
  }

  /**
   * Returns search result venues from the FourSquare
   *
   * @param {object} params : Request parameters
   */
  static searchVenues(params) {
    return Helper.getResponse(`/venues/search`, params);
  }

  /**
   * Returns the details of a single venue
   *
   * @param {string} venue_id : ID of the venue
   */
  static getVenueDetails(venue_id) {
    return Helper.getResponse(`/venues/${venue_id}`);
  }

  /**
   * Returns the details of a single venue
   *
   * @param {string} venue_id : ID of the venue
   */
  static getVenuePhotos(venue_id) {
    return Helper.getResponse(`/venues/${venue_id}/photos`);
  }
}
