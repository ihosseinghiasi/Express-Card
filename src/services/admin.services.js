const axios = require("axios");

const adminServices = (params) => {
  const myAdmin = {};
  return {
    params: params,
    async getAdmin() {
      await axios
        .get(`http://localhost:4000/adminPanel/admin/showAdmin/${params.id}`)
        .then((res) => {
          res.send(res?.data?.admin)
        });
      return myAdmin;
    },
  };
};

const admin = adminServices({ id: "66d0e731823475557dd710f6" });
admin.getAdmin()
