/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k1yade5r0br6zlo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebetjweq",
    "name": "image",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k1yade5r0br6zlo")

  // remove
  collection.schema.removeField("ebetjweq")

  return dao.saveCollection(collection)
})
