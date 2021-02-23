const Persistence = require("../persistence");
class BaseModelRepository {
  constructor() {
    this.persistence = Persistence;
  }
}

module.exports = BaseModelRepository;
