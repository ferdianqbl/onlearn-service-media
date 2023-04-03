const isBase64 = require("is-base64");
const base64Img = require("base64-img");
const { rootPath } = require("../../config/env");
const { Media } = require("../../models");

module.exports = {
  getImage: async (req, res, next) => {
    try {
      const { image } = req.body;
      if (!isBase64(image, { mimeRequired: true }))
        return res
          .status(400)
          .json({ error: 1, message: "Invalid image base64" });

      base64Img.img(
        image,
        `${rootPath}/public/images/`,
        Date.now(),
        async function (err, filepath) {
          if (err)
            return res.status(500).json({ error: 1, message: err.message });

          // filepath = ${rootPath}\public\images\img_name
          const filename = filepath.split("\\").pop();

          const media = await Media.create({
            image: filename,
          });

          if (!media)
            return res.status(500).json({ error: 1, message: "Server error" });

          return res.status(200).json({
            error: 0,
            data: {
              ...media,
              image: `${req.get("host")}/images/${filename}`,
            },
          });
        }
      );
    } catch (error) {
      return res.status(500).json({ error: 1, message: "Server error" });
    }
  },
};
