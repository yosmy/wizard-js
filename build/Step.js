"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// @refresh reset
var resolvePosition = function resolvePosition(strid, current, all) {
  var s = all.indexOf(strid);
  var c = all.indexOf(current);

  if (s < c) {
    return -1;
  }

  if (s === c) {
    return 0;
  }

  return 1;
};

var Step = (0, _react.memo)(function (_ref) {
  var strid = _ref.strid,
      current = _ref.current,
      all = _ref.all,
      focused = _ref.focused,
      unfocused = _ref.unfocused;
  var position = resolvePosition(strid, current, all);

  switch (position) {
    case -1:
      return unfocused();

    case 0:
      return focused();

    case 1:
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null);

    default:
      throw new Error("Invalid position ".concat(position));
  }
}, function (prev, next) {
  return prev.current === next.current && !next.refresh || resolvePosition(prev.strid, prev.current, prev.all) === resolvePosition(next.strid, next.current, next.all) && !next.refresh;
});
Step.propTypes = {
  strid: _propTypes["default"].string.isRequired,
  current: _propTypes["default"].string.isRequired,
  all: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  focused: _propTypes["default"].func.isRequired,
  unfocused: _propTypes["default"].func,
  refresh: _propTypes["default"].bool // Forces refresh. Useful for execution button

};
var _default = Step;
exports["default"] = _default;