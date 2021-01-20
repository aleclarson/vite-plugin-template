const path = require('path')

exports.form = {
  description: String,
}

exports.context = {
  name: /^vite-plugin-(.+)$/.exec(path.basename(__dirname))[1],
}
