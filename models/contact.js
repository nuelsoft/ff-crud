const BaseModelRepository = require("./base");
class Contact {
  /**
   * @param data {{id?: string, full_name?: string, username?: string, phone?: string, email?: string}}
   */
  constructor(data) {
    this.data = data;
  }

  /**
   *
   * @returns {string}
   */
  get id() {
    return this.data.id;
  }

  get username() {
    return this.data.username;
  }

  get json() {
    return {
      ...this.data,
      password: undefined,
    };
  }
}

class ContactRepository extends BaseModelRepository {
  /**
   *
   * @param contact {Contact}
   * @returns {Contact}
   */
  create(contact) {
    return new Contact(this.persistence.write(contact.data));
  }

  /**
   *
   * @param id {string}
   * @returns {Contact | null}
   */
  get(id) {
    const data = this.persistence.read(id);
    return data ? new Contact(this.persistence.read(id)) : null;
  }

  all() {
    return this.persistence.all();
  }

  /**
   *
   * @param id {string}
   */
  delete(id) {
    this.persistence.delete(id);
  }
}

module.exports = { ContactRepository: new ContactRepository(), Contact };
