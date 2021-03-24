/**
 * Fake Auth Service
 */
export default class AuthService {
  credentials = [
    {
      username: 'huxley',
      password: 'bigbrother',
      displayName: 'Aldous Huxley',
    }
  ]

  /** currently logged in user */
  user = null;

  /**
   * Login to fake auth service
   * @param {string} username
   * @param {string} password
   * @returns {Promise<AuthResponse | null>} login status
   */
  login(username, password) {
    console.log('checking credentials');
    const userObj = this._findUser(username);
    if (userObj && (userObj.password === password)) {
        // If we found a user in this.credentials 
        // and the passwords match.
        this.user = userObj;
        Promise.resolve({
            isValid: true,
            message: 'Login successful',
            user: userObj
        });
    } else {
        // We couldn't find a user with that username
        // or the passwords didn't match.
        Promise.resolve({
            isValid: false,
            message: 'Bad username or password'
        });
    }
  }

  /**
   * log out the currently logged in user
   * @returns {AuthResponse} logged out status
   */
  logout() {
    this.user = null;

    Promise.resolve({
      isValid: true,
      message: 'Logged out successfully'
    });
  }

  /**
   * Get the current User
   * @returns {Promise<UserObject | null>}the currently logged in user or null
   */
  loggedInUser() {
    return Promise.resolve(this.user || null);
  }

  /**
   * Lookup user by their username or return null
   * @private
   * @param {string} username username to look for
   * @returns {UserObject} the user object or null
   */
  _findUser(username) {
    return this.credentials.find(user => user.username === username) || null;
  }
}

/**
 * @typedef {Object} AuthResponse
 * @property {boolean} isValid
 * @property {string} message
 * @prop {UserObject} user
 */

/**
 * @typedef {Object} UserObject
 * @property {string} username
 * @property {string} password
 * @property {string} displayName
 */