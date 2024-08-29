/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0gne7nix944ibq")

  // remove
  collection.schema.removeField("reonnlop")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnbikzxl",
    "name": "audio",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ixsh95oui7cho3u",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0gne7nix944ibq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "reonnlop",
    "name": "audioData",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("lnbikzxl")

  return dao.saveCollection(collection)
})
