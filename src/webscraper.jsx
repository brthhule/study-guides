async function webscraper() {
  console.log("Running webscraper")
    const url = "https://www.webfx.com/blog/seo/seo-principles/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }


  export default webscraper;