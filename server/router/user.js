const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const escapeRegex = string => {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
router.post("/send", userCtrl.sendMessage);

// // GET - Shop Product Page | - Displaying demanded product page with page numbers
// router.get("/message/:page", async (req, res, next) => {
//   // Declaring variable
//   const resPerPage = 9; // results per page
//   const page = req.params.page || 1; // Page
//   try {
//     if (req.query.search) {
//       // Declaring query based/search variables
//       const searchQuery = req.query.search,
//         regex = new RegExp(escapeRegex(req.query.search), "gi");
//       // Find Demanded Products - Skipping page values, limit results       per page
//       const foundProducts = await Product.find({ name: regex })
//         .skip(resPerPage * page - resPerPage)
//         .limit(resPerPage);
//       // Count how many products were found
//       const numOfProducts = await Product.count({ name: regex });
//       // Renders The Page
//       res.userCtrl.getMessage,
//         {
//           currentPage: page,
//           pages: Math.ceil(numOfProducts / resPerPage),
//           searchVal: searchQuery,
//           numOfResults: numOfProducts
//         };
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// });

router.get("/message", userCtrl.getMessage);

module.exports = router;
