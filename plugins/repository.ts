export default ({ $axios }) => {
  /*
    - Create a file in repositories folder with PLURAL model name
    - Add the PLURAL model name here
  */
  const repos = [
    'courses',
    'resources',
    'users',
    'batches',
    'lectures',
    'zoom-accounts',
    'zoom-meetings'
  ]

  repos.forEach(repo => {
    require(`@/repositories/${repo}`).default.register($axios, repo);
  })

  const adminRepos = [
    'courses',
    'resources',
    'documents',
    'batches',
    'lectures',
    'videos',
    'quizzes',
    'code-challenges',
    'project-challenges',
  ]

  adminRepos.forEach(repo => {
    require(`@/repositories/admin/${repo}`).default.register($axios, repo, 'admin');
  })  
}
