import jwt from "jsonwebtoken"
  const maxAge = 3 * 24 * 60 * 60 * 1000;
  const createToken = (id: string) => {
    return jwt.sign({id}, "nodejs is program language", {
        expiresIn: maxAge
    })
  }

export {createToken, maxAge}