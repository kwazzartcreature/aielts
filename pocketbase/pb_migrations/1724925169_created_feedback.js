/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m8yqso05dk78pal",
    "created": "2024-08-29 09:52:49.055Z",
    "updated": "2024-08-29 09:52:49.055Z",
    "name": "feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("m8yqso05dk78pal");

  return dao.deleteCollection(collection);
})
