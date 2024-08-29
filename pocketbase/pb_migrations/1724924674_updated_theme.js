/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k1yade5r0br6zlo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrdd4dui",
    "name": "vocabulary",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fhcdiwmbmg4sb2a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k1yade5r0br6zlo")

  // remove
  collection.schema.removeField("lrdd4dui")

  return dao.saveCollection(collection)
})
