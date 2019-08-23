module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'www.doniai.com',
        productName: 'Doniai工具助手',
        copyright: 'Copyright © 2019 Doniai',
        artifactName: 'Doniai Setup ${version}.${ext}',
        mac: {
          icon: './public/icon.icns',
          target: 'dmg'
        },
        win: {
          icon: './public/icon.ico',
          target: {
            target: 'nsis',
            arch: [
              'x64',
              'ia32'
            ]
          }
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
      }
    }
  }
}
