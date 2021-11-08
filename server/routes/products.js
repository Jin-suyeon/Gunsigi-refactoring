const express = require('express');
const { param, query } = require('express-validator');
const products = require('../controllers/products');
const token = require('../middlware/token');
const validationError = require('../middlware/error');
const cache = require('../middlware/cache');

const router = express.Router();

router.use(token.check);
router.use(cache);

// routes
router.get(
  '/',
  query('query')
    .notEmpty()
    .withMessage('query는 필수 입력값입니다.')
    .isString()
    .withMessage('쿼리는 문자열로 입력해주세요')
    .isLength({ min: 1, max: 20 })
    .withMessage('검색어는 2자 이상 20자 이하로 입력해주세요.'),
  query('type')
    .default('search')
    .isIn(['search', 'category', 'keyword'])
    .withMessage('type은 search, category, keyword 중에 하나를 입력해주세요.'),
  query('page')
    .default(1)
    .isInt({ min: 1 })
    .withMessage('page는 숫자로 입력해주세요'),
  query('size')
    .default(30)
    .isInt()
    .withMessage('size는 숫자로 입력해주세요'),
  query('order')
    .default('views')
    .isIn(['views', 'reviews'])
    .withMessage('정렬값은 views , reviews 중에 하나를 입력해주세요'),
  validationError,
  products.search,
);
router.get(
  '/:productId',
  param('productId').isInt().withMessage('올바른 제품ID를 입력해주세요'),
  validationError,
  products.detail,
);

router.get(
  '/all/items',
  query('page').default(1).isInt({ min: 1 }).withMessage('page는 숫자로 입력해주세요'),
  query('size').default(30).isInt().withMessage('size는 숫자로 입력해주세요'),
  query('order')
    .default('views')
    .isIn(['views', 'reviews'])
    .withMessage('정렬값은 views , reviews 중에 하나를 입력해주세요'),
  validationError,
  products.all,
);

module.exports = router;
