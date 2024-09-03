/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z7ycsq3dlox0orc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdlu1aq1",
    "name": "theme",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k1yade5r0br6zlo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z7ycsq3dlox0orc")

  // remove
  collection.schema.removeField("gdlu1aq1")

  return dao.saveCollection(collection)
})
