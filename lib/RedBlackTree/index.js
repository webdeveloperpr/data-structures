'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BinarySearchTree2 = require('../BinarySearchTree');

var _BinarySearchTree3 = _interopRequireDefault(_BinarySearchTree2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedBlackTree = function (_BinarySearchTree) {
  _inherits(RedBlackTree, _BinarySearchTree);

  function RedBlackTree() {
    _classCallCheck(this, RedBlackTree);

    return _possibleConstructorReturn(this, (RedBlackTree.__proto__ || Object.getPrototypeOf(RedBlackTree)).apply(this, arguments));
  }

  return RedBlackTree;
}(_BinarySearchTree3.default);

exports.default = RedBlackTree;