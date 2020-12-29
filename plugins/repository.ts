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
    'zoom-meetings',
    'hackerblocks',
    'notes',
    'counselling-bookings',
    'minio',
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
    'youtube-lives',
    'zoom-meetings',
    'instructors',
    'tags'
  ]

  adminRepos.forEach(repo => {
    require(`@/repositories/admin/${repo}`).default.register($axios, repo, 'admin');
  })  
}
