/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e10vq2hvurklagb")

  collection.viewRule = "@request.auth.id = user.attempt_via_user.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e10vq2hvurklagb")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
