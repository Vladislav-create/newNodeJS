const fs = require("fs");
const express = require("express");
const joi = require("joi");

const userSchema = joi.object({
  firstname: joi.string().min(3).required(),
  lastname: joi.string().min(3).required(),
  age: joi.number().min(0).required(),
  city: joi.string().min(2),
});

const app = express();

app.use(express.json());

let uId = 2;

app.get("/users", (req, res) => {
  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения JSON файла");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.get("/users/:id", (req, res) => {
  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения JSON файла");
    } else {
      const users = JSON.parse(data);
      const user = users.find((user) => user.id === +req.params.id);
      if (user) {
        res.send({ user });
      } else {
        res.status(404);
        res.send({ user: null });
      }
    }
  });
});

app.put("/users/:id", (req, res) => {
  const result = userSchema.validate(req.body);

  if (result.error) {
    return res.status(500).send({ error: result.error.details });
  }

  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения JSON файла");
    } else {
      const users = JSON.parse(data);
      const user = users.find((user) => user.id === +req.params.id);
      if (user) {
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(
          __dirname + "/users.json",
          JSON.stringify(users, null, 2)
        );
        res.send({ users });
      } else {
        res.status(404);
        res.send({ user: null });
      }
    }
  });
});

app.post("/users", (req, res) => {
  const result = userSchema.validate(req.body);

  if (result.error) {
    return res.status(500).send({ error: result.error.details });
  }

  uId += 1;

  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения JSON файла");
    } else {
      const users = JSON.parse(data);
      const newUser = {
        id: uId,
        ...req.body,
      };
      users.push(newUser);
      fs.writeFileSync(
        __dirname + "/users.json",
        JSON.stringify(users, null, 2)
      );
      res.send(users);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения JSON файла");
    } else {
      const users = JSON.parse(data);
      const user = users.find((user) => user.id === +req.params.id);

      if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        fs.writeFileSync(
          __dirname + "/users.json",
          JSON.stringify(users, null, 2)
        );

        res.send({ users });
      } else {
        res.status(404);
        res.send({ user: null });
      }
    }
  });
});

app.listen(3000, () => {
  console.log("Сервер запущен.");
});
