const express = require("express");
const { ContactRepository, Contact } = require("../models");

/**
 *
 * @param request {express.Request}
 * @param response {express.Response}
 */
const register = (request, response) => {
  const { full_name, username, email, phone } = request.body;

  const contact = ContactRepository.create(
    new Contact({ full_name, username, email, phone })
  );

  response.status(201).send(contact.data);
};

/**
 *
 * @param request {express.Request}
 * @param response {ecpress.Repsonse}
 */
const update = (request, response) => {
  const { id } = request.params;
  const { full_name, username, email, phone } = request.body;

  const contact = ContactRepository.get(id);

  if (!contact)
    return response
      .status(404)
      .send({ error: `contact with id ${id} not found` });

  console.log(contact.id);

  const update = ContactRepository.create(
    new Contact({
      full_name: full_name || contact.data.full_name,
      username: username || contact.username,
      email: email || contact.data.email,
      phone: phone || contact.data.phone,
      id: contact.id,
    })
  );

  response.status(200).send(update.data);
};
/**
 *
 * @param request {express.Request}
 * @param response {express.Response}
 */
const all = (request, response) => {
  const contacts = ContactRepository.all();
  response.status(200).send(contacts);
};

/**
 *
 * @param request {express.Request}
 * @param response {epress.Response}
 */
const remove = (request, response) => {
  const { id } = request.params;

  const contact = ContactRepository.get(id);
  if (!contact)
    return response
      .status(404)
      .send({ error: `contact with id ${id} not found` });

  ContactRepository.delete(id);

  response.status(200).send({ message: "contact deleted" });
};

/**
 *
 * @param request {express.Request}
 * @param response {express.Response}
 */
const one = (request, response) => {
  const { id } = request.params;

  const contact = ContactRepository.get(id);

  response
    .status(contact ? 200 : 404)
    .send(contact ? contact.data : { error: `contact not found` });
};

module.exports = { remove, one, update, register, all };
