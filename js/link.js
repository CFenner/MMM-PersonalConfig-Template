const fs = require('fs');
const path = require('path');

function linkConfig(){
        const MIRROR_BASE_DIR = path.normalize(`${process.cwd()}/../..`)
        const MODULE_BASE_DIR = `${process.cwd()}`

        let files = {}
        files[`${MIRROR_BASE_DIR}/config/config.js`] = `${MODULE_BASE_DIR}/config.js`
        files[`${MIRROR_BASE_DIR}/css/custom.css`] = `${MODULE_BASE_DIR}/custom.css`

        for (const [symlink, target] of Object.entries(files)) {
                console.log("config " + target)
                console.log("symlink " + symlink)
                fs.symlink(target, symlink, (err) => console.log(err))
        }
}

linkConfig()
