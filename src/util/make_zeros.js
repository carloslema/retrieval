/**
 * Initialize sparse vector.
 */
const math = require('mathjs');

module.exports = function(len) {
    return math.zeros(len, 1, 'sparse');
};

// module.exports = function(obj) {
//     return math.zeros(_.size(obj), 1, 'sparse');
// };
