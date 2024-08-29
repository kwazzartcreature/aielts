/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hscw74pl2up4iky",
    "created": "2024-08-29 10:12:23.609Z",
    "updated": "2024-08-29 10:12:23.609Z",
    "name": "question",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qrrbvsfk",
        "name": "content",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("hscw74pl2up4iky");

  return dao.deleteCollection(collection);
})
