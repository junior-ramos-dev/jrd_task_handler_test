import { v4 as uuid } from "uuid";
/**
 * This is an example of multiple tasks to be used with task loader.
 *
 * The example simulates the creation of an account and loading the user data
 * from a game platform using an API
 *
 */
export interface RegisterData {
  user: {
    id: string;
    email: string;
  };
}

// Task 1 - Check email
export const checkEmailExists = async (email: string) => {
  console.log(email);
  let emailExists: boolean = false;

  return new Promise((resolve) => {
    emailExists = false;
    setTimeout(() => {
      resolve(emailExists);

      if (emailExists) {
        throw new Error("An account with the provided email already exists");
      }
    }, 1000);
  });
};

// Task 2 - Get API credentials
export const getApiCredentials = async () => {
  let apiCredentials: unknown = undefined;

  return new Promise((resolve) => {
    apiCredentials = { token: "<some token>" };
    setTimeout(() => {
      resolve(apiCredentials);

      if (!apiCredentials) {
        throw new Error("An error occurred while getting the API credentials");
      }
    }, 2000);
  });
};

// Task 3 - Create account
export const createAccount = async (email: string, password: string) => {
  console.log(email, password);

  const data: RegisterData = {
    user: { id: "", email: "" },
  };

  return new Promise((resolve) => {
    data.user.id = uuid();
    data.user.email = email;
    setTimeout(() => {
      resolve(data);

      if (!data) {
        throw new Error("An error occurred while creating the account");
      }
    }, 3000);
  });
};

// Task 4 - Load games list
export const loadGamesList = async (userId: string) => {
  console.log(userId);
  let gamesList: unknown = undefined;

  return new Promise((resolve) => {
    gamesList = ["game1", "game2"];
    setTimeout(() => {
      resolve(gamesList);

      if (!gamesList) {
        throw new Error("An error occurred loading games list");
      }
    }, 4000);
  });
};

// Task 5 - Load the games icons
export const loadGamesIcons = async (userId: string) => {
  console.log(userId);
  let gamesIcons: unknown = undefined;

  return new Promise((resolve) => {
    gamesIcons = ["icon1", "icon2"];
    setTimeout(() => {
      resolve(gamesIcons);

      if (!gamesIcons) {
        throw new Error("An error occurred loading games icons");
      }
    }, 4000);
  });
};

// Task 6 - Get the games trophies list
export const loadGamesTrophiesList = async (userId: string) => {
  console.log(userId);
  let trophiesLists: unknown = undefined;

  return new Promise((resolve) => {
    trophiesLists = ["list1", "list2"];
    setTimeout(() => {
      resolve(trophiesLists);

      if (!trophiesLists) {
        throw new Error("An error occurred games trophies lists");
      }
    }, 10000);
  });
};

// Task 7 - Set result data
export const getResultData = async (user: RegisterData) => {
  return Promise.resolve(user);
};
