const BASE_URL = "https://www.setfilmizle.ltd";

const plugin = {
  name: "SetFilmIzle",
  async search(query) {
    try {
      const response = await fetch(`${BASE_URL}/arama?q=${encodeURIComponent(query)}`);
      const html = await response.text();
      return [];
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  async getLatest(page) {
    try {
      const response = await fetch(`${BASE_URL}/filmler?sayfa=${page}`);
      const html = await response.text();
      return [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
};
