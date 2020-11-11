export default ({ $axios }) => {
  /*
    - Create a file in repositories folder with PLURAL model name
    - Add the PLURAL model name here
  */
  const repos = [
    'courses',
    'resources'
  ]

  repos.forEach(repo => {
    require(`@/repositories/${repo}`).default.register($axios, repo);
  })
}
