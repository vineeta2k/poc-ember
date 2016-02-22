import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    console.log("Address Serializer");

    var uniqueId = id;

    for (var attr in payload) {
          if(attr === 'post code') {
              payload.zip = payload[attr];
              break;
            }
    }

    var places = payload.places;
    var field = places[0];
    for (var property in field) {
          if(property === 'place name') {
              payload.places[0].city = field[property];
              break;
          }

    }
    payload.city = payload.places[0].city;
    payload.state = payload.places[0].state;
    delete payload.places;

    var normalizedRecord = {
      'type': primaryModelClass.modelName,
      'id': uniqueId,
      'attributes': payload
    };

    normalizedRecord = {data: normalizedRecord};

    console.log(normalizedRecord);
    console.log(primaryModelClass);

    return this._super(store, primaryModelClass, normalizedRecord, id, requestType);
  }

});
