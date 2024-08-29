/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m8yqso05dk78pal")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvkgujem",
    "name": "criterias",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rsu94rtre2gwndg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m8yqso05dk78pal")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvkgujem",
    "name": "criteria",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rsu94rtre2gwndg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
