/**
 * Fake Auth Service
 */
export default class AuthService {
  credentials = {
    huxley: {
      name: 'Aldous',
      password: 's3kr3t'
    }
  }

  /** currently logged in user */
  user = null;

  /**
   * Login to fake auth service
   * @param {string} username
   * @param {string} password
   * @returns login status
   */
  login(username, password) {
    console.log('checking credentials');
    const userObj = this.credentials[username];
    if (userObj && (userObj.password === password)) {
        // If we found a user in this.credentials 
        // and the passwords match.
        this.user = userObj;
        return Promise.resolve({
            isValid: true,
            message: 'Login successful'
        });
    } else {
        // We couldn't find a user with that username
        // or the passwords didn't match.
        return Promise.resolve({
            isValid: false,
            message: 'Bad username or password'
        });
    }
  }

  /**
   * 
   * @returns logged out status
   */
  logout() {
    this.user = null;

    return Promise.resolve({
      message: 'Logged out successfully'
    });
  }

  /**
   * Get the current User
   * @returns the currently logged in user or null
   */
  getUser() {
    return this.user || null;
  }
}