import authServices from "../services/authService.js";
import { User } from "../classes/user.js";

export async function register(req, res) {
  const { username, avatar } = req.body;

  const user = new User(username, avatar);

  const invalidRegister = await authServices.validate(user);
  
  if (invalidRegister) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  await authServices.register(user);
  
  res.status(200).send('OK deu tudo certo');
};
    