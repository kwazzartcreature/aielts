/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rsu94rtre2gwndg",
    "created": "2024-08-29 09:50:46.880Z",
    "updated": "2024-08-29 09:50:46.880Z",
    "name": "feedback_criteria",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qleaxt1s",
        "name": "content",
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
  const collection = dao.findCollectionByNameOrId("rsu94rtre2gwndg");

  return dao.deleteCollection(collection);
})
