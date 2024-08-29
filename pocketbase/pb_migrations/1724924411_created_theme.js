/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k1yade5r0br6zlo",
    "created": "2024-08-29 09:40:11.978Z",
    "updated": "2024-08-29 09:40:11.978Z",
    "name": "theme",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d0z73f5v",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "es5sx8kc",
        "name": "slug",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("k1yade5r0br6zlo");

  return dao.deleteCollection(collection);
})
