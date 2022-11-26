import authServices from "../services/authService.js";

export async function register(req, res) {
  const { username, avatar } = req.body;

  const invalidRegister = await authServices.validate(username, avatar);
  
  if (invalidRegister) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }
  
  res.status(200).send('OK deu tudo certo');
};
    