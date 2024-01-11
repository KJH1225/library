const BannerService = require("../services/bannerService");

class BannerController {

	static async createBanner(req, res, next){
		try {
			const newBanner = req.body;
			const result = await BannerService.createBanner({newBanner});
			res.status(201).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async getAllBanner(req, res, next){
		try {
			const result = await BannerService.getAllBanner();
			res.status(200).json(result);
		} catch (error) {
			next(error)
		}
	}

	static async updateBanner(req, res, next){
		try {
			const banner_id = req.params.banner_id;
			const {...props} = req.body;
      const toUpdate = {...props}

			const result = await BannerService.updateBanner({ banner_id, toUpdate });
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async deleteBanner(req, res, next){
		try {
			const Banner_id = req.params.banner_id;

			const result = await BannerService.deleteBanner({ banner_id });
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

}

module.exports = BannerController;