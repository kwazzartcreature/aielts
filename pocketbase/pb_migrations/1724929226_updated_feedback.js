/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m8yqso05dk78pal")

  // remove
  collection.schema.removeField("jznmm4ff")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m8yqso05dk78pal")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jznmm4ff",
    "name": "band",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
