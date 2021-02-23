const fs = require("fs");
const crypto = require("crypto")

class Persistence {

  static storePath = "./persistence/store.json"

  /**
   * @type boolean
   */
  static initialized = false;

  static initialize() {
    fs.openSync(this.storePath, 'a');
    this.initialized = true;
  }

  static ensureInitialized() {
    if (!this.initialized) throw new Error("Persistence not initialized")
  }

  /**
   * @private
   * @returns {Object.<string, *>}
   */
  static store() {
    try{
      return JSON.parse(fs.readFileSync(this.storePath).toString())
    }catch (e) {
      return {};
    }
  }

  /**
   *
   * @param id {string}
   * @returns Object.<string, *> | null
   */
  static read(id) {
    this.ensureInitialized();

    return this.store()[id];
  }

  static all() {
    this.ensureInitialized();
    return Object.values(this.store());
  }

  /**
   *
   * Method serves as an update as well as a create
   *
   * @param data {Object.<string, *>}
   * @returns {{id: string }}
   */
  static write(data) {
    this.ensureInitialized();

    //Store the data with provided id or generate one
    const id = data.id || crypto.randomBytes(16).toString("hex");
    fs.writeFileSync(this.storePath, JSON.stringify({...this.store(), [id]: {...data, id}}))

    return {
      ...data, id
    }
  }

  /**
   *
   * @param id {string}
   */
  static delete(id) {
    this.ensureInitialized();

    const base = this.store();
    delete base[id];

    fs.writeFileSync(this.storePath, JSON.stringify(base));
  }
}

module.exports = Persistence;