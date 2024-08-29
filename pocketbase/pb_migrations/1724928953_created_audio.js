/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ixsh95oui7cho3u",
    "created": "2024-08-29 10:55:53.102Z",
    "updated": "2024-08-29 10:55:53.102Z",
    "name": "audio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zwubvbwb",
        "name": "url",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("ixsh95oui7cho3u");

  return dao.deleteCollection(collection);
})
