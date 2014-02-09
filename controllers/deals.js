/**
 * GET /
 * Deals page.
 */

exports.index = function(req, res) {
  res.render('deals', {
    title: 'Deals',
    angular: 'deals'
  });
};
