import Realm from 'realm';
export const RESTAURANT_SCHEMA = 'RestaurantList';
export const IMAGE_SCHEMA = "ImageSchema"

const ImagesSchema = {
    embedded: true,
    name : IMAGE_SCHEMA,
    properties : {
        url : "string"
    }
  }

const RestaurantSchema = {
    name: RESTAURANT_SCHEMA,
    properties: {
      id: "int",
      title: "string",
      address: "string",
      latitude: "string",
      longitude: "string",
      rating : "float",
      total_review : "int",
      description : "string",
      mobile : "string",
      //page : "int",
      images: {type : "list", objectType : IMAGE_SCHEMA}

    },
    primaryKey: "id",
  };

  const databaseOptions = {
    path: 'restaurant.realm',
    schema: [RestaurantSchema, ImagesSchema],
    schemaVersion: 4, // optional
  };

  export const insertNewRestaurant = restaurantData =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(RESTAURANT_SCHEMA, restaurantData);
          resolve(restaurantData);
        });
      })
      .catch(error => reject(error));
  });

  export const getLocalDbRestaurant = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoLists = realm.objects(RESTAURANT_SCHEMA);
          resolve(allTodoLists);
        });
      })
      .catch(error => reject(error));
  });

  export const deleteAllRestaurantList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoLists = realm.objects(RESTAURANT_SCHEMA);
          realm.delete(allTodoLists);
          resolve();
        });
      })
      .catch(error => reject(error));
  });