/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z7ycsq3dlox0orc",
    "created": "2024-08-29 10:12:47.575Z",
    "updated": "2024-08-29 10:12:47.575Z",
    "name": "task",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "ismg5ulk",
        "name": "section",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "writing",
            "speaking"
          ]
        }
      },
      {
        "system": false,
        "id": "hzp82clf",
        "name": "part",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "ukwwll0c",
        "name": "snippet",
        "type": "text",
        "required": true,
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
        "id": "wcmklyp3",
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
      },
      {
        "system": false,
        "id": "gnj4hce3",
        "name": "questions",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "hscw74pl2up4iky",
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
  const collection = dao.findCollectionByNameOrId("z7ycsq3dlox0orc");

  return dao.deleteCollection(collection);
})
