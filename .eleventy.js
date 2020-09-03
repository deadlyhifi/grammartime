module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/css");

  eleventyConfig.addFilter("excerpt", function (value) {
    const content = value.template.frontMatter.content;

    return content.length > 50 ? `${content.substring(0, 50)}…` : null;

  });

  return {
    dir: {
      input: "site",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
