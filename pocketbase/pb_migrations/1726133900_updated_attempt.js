/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e10vq2hvurklagb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5quq5m6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "singlePart",
        "fullSection"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e10vq2hvurklagb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5quq5m6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "single_part",
        "full_section"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
