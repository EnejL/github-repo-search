class Interface {

  // Display Search Results
  generateRepo(repo) {
    let output = '';

    repo.forEach(function (repo) {

      output += `

      <div class="search-result-item">
        <div class="search-result-content">
            <div class="search-result-image">
                <img src="${repo.owner.avatar_url}" />
            </div>
            <div class="search-result-name-description">
                <h3 class="result-name">
                    <a class="result-repo-link" href="${repo.html_url}" target="_blank" >
                        ${repo.name}
                    </a>
                </h3>
                <div class="result-description">
                    ${repo.description}
                </div>
            </div>
        </div>
          <div class="result-additional-content">
            <div class="additional-content-image">
              <img src="${repo.owner.avatar_url}" />
            </div>
            <div class="additional-content-name-description">
              <h3 class="additional-content-name">
                <a class="result-repo-link" href="${repo.html_url}" target="_blank" >
                  ${repo.name}
                </a>
              </h3>
              <div class="additional-content-description">
                ${repo.description}
              </div>
            </div>
            <h3 class="latest-commits" >Latest Commits</h3>
            <div class="commit-wrapper">
              <span class="commit-timestamp">
                ${repo.updated_at}
              </span>
            </div>
          </div>
      </div>

      `;

    })

    document.getElementById('search-results-grid').innerHTML = output;
  }

  clearProfile() {
    this.displayRepo.innerHTML = '';
  }
}
