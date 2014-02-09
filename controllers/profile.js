/**
 * GET /
 * Profile page.
 */

exports.index = function(req, res) {
  res.render('profile', {
    title: 'Profile',
    angular: 'profile'
  });
};
