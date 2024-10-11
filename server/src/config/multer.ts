import multer from "multer"

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../../../src/upload")
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})
