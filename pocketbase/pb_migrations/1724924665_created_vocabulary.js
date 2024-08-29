/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fhcdiwmbmg4sb2a",
    "created": "2024-08-29 09:44:25.527Z",
    "updated": "2024-08-29 09:44:25.527Z",
    "name": "vocabulary",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ehu9fqov",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fhcdiwmbmg4sb2a");

  return dao.deleteCollection(collection);
})
