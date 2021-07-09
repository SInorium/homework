module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '198.54.113.106',
      ref: 'origin/master',
      repo: 'git@gitlab.com:brightlab_me/waifu.git',
      path: '/home/deploy/apps/waifu',
      'post-deploy': 'yarn; yarn generate'
    }
  }
}
