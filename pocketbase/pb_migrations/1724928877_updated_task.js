/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z7ycsq3dlox0orc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szcnlhdf",
    "name": "examType",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "general",
        "academic"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z7ycsq3dlox0orc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szcnlhdf",
    "name": "exam_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "general",
        "academic"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
