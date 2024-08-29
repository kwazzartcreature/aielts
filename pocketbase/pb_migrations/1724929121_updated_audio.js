/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ixsh95oui7cho3u")

  // remove
  collection.schema.removeField("zwubvbwb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egxjbtvw",
    "name": "audio",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbbxgnbp",
    "name": "questionOffsetsString",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ixsh95oui7cho3u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwubvbwb",
    "name": "url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("egxjbtvw")

  // remove
  collection.schema.removeField("vbbxgnbp")

  return dao.saveCollection(collection)
})
