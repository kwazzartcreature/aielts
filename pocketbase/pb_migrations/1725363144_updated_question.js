/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hscw74pl2up4iky")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvnyact5",
    "name": "order",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hscw74pl2up4iky")

  // remove
  collection.schema.removeField("yvnyact5")

  return dao.saveCollection(collection)
})
