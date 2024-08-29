/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsu94rtre2gwndg")

  collection.name = "feedbackCriteria"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rsu94rtre2gwndg")

  collection.name = "feedback_criteria"

  return dao.saveCollection(collection)
})
