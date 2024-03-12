module.exports = function(eleventyConfig) {
  // Add any configuration or passthrough settings if needed

  // Example of passthrough for images
  eleventyConfig.addPassthroughCopy("images");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
