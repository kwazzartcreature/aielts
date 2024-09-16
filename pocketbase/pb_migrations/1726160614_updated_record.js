/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0gne7nix944ibq")

  // remove
  collection.schema.removeField("iabfjxre")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0gne7nix944ibq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iabfjxre",
    "name": "recordEndTime",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
