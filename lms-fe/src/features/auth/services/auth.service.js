const auth = {
  login: async (payload) => {
    if (
      payload.email === "admin@example.com" &&
      payload.password === "123456"
    ) {
      return {
        id: 1,
        name: "John",
        email: "admin@example.com",
        role: "Admin",
        accessToken: "DEMO_TOKEN",
      };
    } else throw new Error("Invalid credentials!");
  },
  me: async() => {

  },
  logout: async () => {},
  forgotPassword: async () => {},

  refreshToken: async () => {},
};

export default auth;
