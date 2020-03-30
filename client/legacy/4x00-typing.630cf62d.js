import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, p as element, F as text, r as claim_element, u as children, G as claim_text, f as detach_dev, w as attr_dev, x as add_location, y as insert_dev, z as append_dev, n as noop } from './client.ea09e1e2.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/4x00-typing.svelte";

function create_fragment(ctx) {
  var div;
  var h1;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      h1 = element("h1");
      t = text("CSS is awesome");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t = claim_text(h1_nodes, "CSS is awesome");
      h1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "svelte-8qa4pr");
      add_location(h1, file, 17, 2, 1048);
      attr_dev(div, "class", "wrapper svelte-8qa4pr");
      add_location(div, file, 16, 0, 1024);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<_4x00_typing> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("_4x00_typing", $$slots, []);
  return [];
}

var _4x00_typing = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(_4x00_typing, _SvelteComponentDev);

  var _super = _createSuper(_4x00_typing);

  function _4x00_typing(options) {
    var _this;

    _classCallCheck(this, _4x00_typing);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "_4x00_typing",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return _4x00_typing;
}(SvelteComponentDev);

export default _4x00_typing;
