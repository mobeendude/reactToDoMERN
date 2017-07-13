import auth from '../models/auth';
import cuid from 'cuid';



export function getAllAccounts(req, res) {
  auth.find().sort('-id').exec((err, auth) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ auth });
  });
}


export function createAccount(req, res) {
	 console.log(req.body);
  if (!req.body.auth.text) {
    res.status(403).end();
  }
  const newAccount = new auth(req.body.auth);
  newAccount.cuid = cuid();
  
  newAccount.save((err, saved) => {
    if (err) {
     return  res.status(500).send(err);
    }
    else
    {
  return  res.json({ auth: saved });
}
  });
}
