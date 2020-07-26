// Fetch the API response
class GitRepo {
  constructor() {
    this.client_id = 'f13a776be3fdd113b57c';
    this.client_secret = '7a2c49e7c4e0dce0ad1bde501bfe1b753190aea8';
    this.repo_count = 30;
  }

  async getRepo(userText) {
    const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);
    const repo = await repoResponse.json();

    return {
      repo: repo.items
    }
  }
}
