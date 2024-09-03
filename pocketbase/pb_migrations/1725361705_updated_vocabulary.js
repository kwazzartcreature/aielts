/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhcdiwmbmg4sb2a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "juli9nnq",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhcdiwmbmg4sb2a")

  // remove
  collection.schema.removeField("juli9nnq")

  return dao.saveCollection(collection)
})
