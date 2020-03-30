import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, p as element, F as text, r as claim_element, u as children, G as claim_text, f as detach_dev, w as attr_dev, x as add_location, y as insert_dev, z as append_dev, n as noop } from './client.8b67df15.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/3x00-parallelograms.svelte";

function create_fragment(ctx) {
  var div1;
  var div0;
  var t;
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t = text("content");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t = claim_text(div0_nodes, "content");
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "block");
      add_location(div0, file, 36, 2, 2110);
      attr_dev(div1, "class", "wrapper");
      add_location(div1, file, 35, 0, 2086);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<_3x00_parallelograms> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("_3x00_parallelograms", $$slots, []);
  return [];
}

var _3x00_parallelograms = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(_3x00_parallelograms, _SvelteComponentDev);

  var _super = _createSuper(_3x00_parallelograms);

  function _3x00_parallelograms(options) {
    var _this;

    _classCallCheck(this, _3x00_parallelograms);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "_3x00_parallelograms",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return _3x00_parallelograms;
}(SvelteComponentDev);

export default _3x00_parallelograms;
