const fs = require('fs')

 const DeleteFunlinkSyncile = async (filename) => {
   await fs.unlinkSync('./'+filename)
   return ' '
}

exports.DeleteFunlinkSyncile= DeleteFunlinkSyncile