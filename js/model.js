var searchField = document.getElementById('search-field');

const gitRepo = new GitRepo();
const ui = new Interface();
// const commits = new Commit();

// Listening for the user input
searchField.addEventListener('keyup', e => {
  // store user's input Text
  const inputText = e.target.value;

  if (inputText !== '') {
    gitRepo.getRepo(inputText).then(data => {
      ui.generateRepo(data.repo);
      // ui.showCommits(data.commits);
    });
  } else {
    ui.clearProfile();
  }
})
