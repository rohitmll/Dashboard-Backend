const Data = require("../component/model");

// function to get all data
const getAllData = async (req, res, next) => {
  try {
    const allData = await Data.find();
    if (!allData || allData.length === 0) {
      return res.status(400).json({ message: "No data found" });
    }
    return res.status(200).json({ message: "All data", data: allData });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// function to get data filtered by year

const filteredByYear = async (req, res, next) => {
  try {
    const { year } = req.params;
    if (year.length !== 4) {
      return res.status(400).json({ message: "Invalid year" });
    }
    // using '$or' operator to which includes multiple conditions
    // using '$regex' to match the particular field with given input
    // using $options: 'i' to make the search case-insensitive
    const allData = await Data.find({
      $or: [
        { start_year: year },
        { end_year: year },
        { published: { $regex: year, $options: "i" } },
        { added: { $regex: year, $options: "i" } },
      ],
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({ message: "No data found" });
    }
    return res.status(200).json({
      message: `Filter by year ${year}`,
      data: allData,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// function to get data filtered by topics
const filteredByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    if (topic.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid topic",
      });
    }
    // ----------- important -----------
    // using '$regex' to match the particular field with given input
    // using $options: 'i' to make the search case-insensitive
    const allData = await Data.find({
      topic: { $regex: topic, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by topic: ${topic}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// filter by title
const filteredBYTitle = async (req, res) => {
  try {
    const { title } = req.params;
    if (title.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid title",
      });
    }

    const allData = await reportModel.find({
      title: { $regex: title, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by title: ${title}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//  filter by the sector
const filteredBySector = async (req, res) => {
  try {
    const { sector } = req.params;
    if (sector.length < 3) {
      return res.status(400).json({
        message: "Invalid sector",
      });
    }

    const allData = await Data.find({
      sector: { $regex: sector, $options: "i" },
    });

    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by sector: ${sector}`,
      data: allData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by region
const filteredByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    if (region.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid region",
      });
    }

    const allData = await reportModel.find({
      region: { $regex: region, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by region: ${region}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by country
const filteredByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    if (country.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid country",
      });
    }

    const allData = await reportModel.find({
      country: { $regex: country, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by country: ${country}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by pestle
const filteredByPestle = async (req, res) => {
  try {
    const { pestle } = req.params;
    if (pestle.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid pestle",
      });
    }

    const allData = await reportModel.find({
      pestle: { $regex: pestle, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by pestle: ${pestle}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by source
const filteredBySource = async (req, res) => {
  try {
    const { source } = req.params;
    if (source.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid source",
      });
    }

    const allData = await reportModel.find({
      source: { $regex: source, $options: "i" },
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by source: ${source}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by intensity
const filteredByIntensity = async (req, res) => {
  try {
    const { intensity } = req.params;
    const allData = await reportModel.find({ intensity: parseInt(intensity) });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by intensity: ${intensity}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// function to get data filtered by likelihood
const filteredByLikelihood = async (req, res) => {
  try {
    const { likelihood } = req.params;
    const allData = await reportModel.find({
      likelihood: parseInt(likelihood),
    });
    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by likelihood: ${likelihood}`,
      data: allData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Filter by any

const filteredByAny = async (req, res, next) => {
  try {
    const { search } = req.params;
    if (search.length < 3) {
      return res.status(400).json({ message: "Invalid search" });
    }

    const allData = await Data.find({
      $or: [
        { sector: { $regex: search, $options: "i" } },
        { topic: { $regex: search, $options: "i" } },
        { insight: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
        { pestle: { $regex: search, $options: "i" } },
        { source: { $regex: search, $options: "i" } },
        { url: { $regex: search, $options: "i" } },
      ],
    });

    if (!allData || allData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Data Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Filtered by search ${search}`,
      data: allData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getAllData = getAllData;
exports.filteredByYear = filteredByYear;
exports.filteredByTopic = filteredByTopic;
exports.filteredBySector = filteredBySector;
exports.filteredByAny = filteredByAny;
exports.filteredBYTitle = filteredBYTitle;
exports.filteredByRegion = filteredByRegion;
exports.filteredByLikelihood = filteredByLikelihood;
exports.filteredByIntensity = filteredByIntensity;
exports.filteredByCountry = filteredByCountry;
exports.filteredBySource = filteredBySource;
exports.filteredByPestle = filteredByPestle;
