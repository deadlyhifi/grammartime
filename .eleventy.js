module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/css");

  return {
    dir: {
      input: "site",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
