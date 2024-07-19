return 'https://github.com/new?' + new URLSearchParams({
  template_owner: 'skills',
  template_name: 'introduction-to-github',
  owner: '@me',
  name: 'skills-introduction-to-github',
  description: 'My clone repository',
  visibility: 'public',
}).toString()