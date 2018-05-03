const usersSchema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 10,
      maxItems: 50,
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            faker: "random.number"
          },
          email: {
            type: "string",
            faker: "internet.email"
          },
          phone_number: {
            type: "string",
            faker: "phone.phoneNumberFormat"
          },
          location: {
            type: "object",
            properties: {
              street: {
                type: "string",
                faker: "address.streetAddress"
              },
              city: {
                type: "string",
                faker: "address.city"
              },
              state: {
                type: "string",
                faker: "address.state"
              },
              postcode: {
                type: "string",
                faker: "address.zipCode"
              }
            },
            required: ["street", "city", "state", "postcode"]
          },
          username: {
            type: "string",
            faker: "internet.userName"
          },
          password: {
            type: "string",
            faker: "internet.password"
          },
          first_name: {
            type: "string",
            faker: "name.firstName"
          },
          last_name: {
            type: "string",
            faker: "name.lastName"
          },
          title: {
            type: "string",
            faker: "name.prefix"
          },
          picture: "https://www.shareicon.net/data/2016/05/27/771338_man_512x512.png"
        },
        required: ["id", "email", "phone_number", "location", "username", "password", "first_name", "last_name", "title", "picture"]
      }
    }
  },
  required: ["users"]
};

export default usersSchema;
