/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsu94rtre2gwndg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tuadzs3w",
    "name": "name",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "band",
        "lexical",
        "coherence",
        "grammar",
        "pronouncation",
        "structure"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsu94rtre2gwndg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tuadzs3w",
    "name": "name",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "lexical",
        "coherence",
        "grammar",
        "pronouncation",
        "structure"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
